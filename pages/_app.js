import styled from 'styled-components'

import Head from '../components/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

import './app.css'

const MainWrapper = styled.main`
  margin: 0 auto;
  max-width: 960px;
  min-height: calc(100vh - 110px);
  padding: 40px;
  @media (max-width: 600px) {
    padding: 40px 20px 0;
  }
`
export default function MyApp({ Component, pageProps }) {
  const { head } = pageProps
  const { title, description, canonical, schemaOrg, noIndex } = head || {}

  return (
    <>
      <Head
        title={title}
        description={description}
        canonical={canonical}
        schemaOrg={schemaOrg}
        noIndex={noIndex}
      />
      <Header />
      <MainWrapper>
        <Component {...pageProps} />
      </MainWrapper>
      <Footer />
    </>
  )
}
