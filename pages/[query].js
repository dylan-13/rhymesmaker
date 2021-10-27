import SearchRhymes from '../components/SearchRhymes'

function Query({ query }) {
  return <SearchRhymes queryFromPath={query} />
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/rhymes?q=${params.query}`)
  const words = await res.json()

  return !!words.length
    ? {
        props: {
          query: params.query,
          head: {
            title: `RhymesMaker | rimes en "${params.query}"`,
            description: `Découvrez toutes les rimes en "${params.query}", triées seulont le nombres de syllabes`,
            canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${params.query}`,
            schemaOrg: `{"@context":"http://schema.org","@type":"WebPage","name": ${params.query},"url":${process.env.NEXT_PUBLIC_WEBSITE_URL}/${params.query}}`
          }
        }
      }
    : {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
}

export default Query
