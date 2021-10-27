import Input from './Elements/Input'
import Button from './Elements/Button'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'

const Container = styled.section`
  margin: 0;
  position: relative;
`

const SearchTitle = styled.h1`
  font-size: 26px;
  @media (max-width: 600px) {
    font-size: 22px;
  }
`

const PageRow = styled.div`
  display: flex;
  margin: 20px 0;
`

const ListContainer = styled.div`
  margin: 10px 0;
  background-color: #242526;
  border: 1px solid #000000;
  border-radius: 10px;
`

const ListWrapper = styled.div`
  margin: 10px;
`

const ListTitle = styled.h4`
  margin-bottom: 5px;
`

const List = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  line-height: 1.4;
  & p {
    display: contents;
  }
`

export default function SearchRhymes({ queryFromPath }) {
  const [query, setQuery] = useState(queryFromPath)
  const [wordLists, setWordLists] = useState([])
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/rhymes?q=${query}`)
      const words = await res.json()
      setWordLists(words)
    }

    !!query ? fetchData() : setWordLists([])
  }, [query])

  return (
    <Container>
      <SearchTitle>Recherche complète de rimes</SearchTitle>
      <PageRow>
        <Input
          placeholder="mot ou terminaison.."
          label="rime en"
          value={query}
          onChange={({ target }) => setQuery(target.value)}
        />
        <Button onClick={() => router.push(`/${query}`)} content="Rechercher" />
      </PageRow>
      {!!wordLists?.length && !!query ? (
        <ListContainer>
          {wordLists.map((list) =>
            Object.entries(list).map(
              ([key, values]) =>
                !!values.length && (
                  <ListWrapper key={key}>
                    <ListTitle>{`${key} syllabe :`}</ListTitle>
                    <List key={key}>
                      {values.map((word) => (
                        <p>{word}, </p>
                      ))}
                    </List>
                  </ListWrapper>
                )
            )
          )}
        </ListContainer>
      ) : (
        !!query && (
          <ListContainer>
            <ListWrapper>
              <p style={{ textAlign: 'center' }}>Notre base de données ne contient pas ce mot</p>
            </ListWrapper>
          </ListContainer>
        )
      )}
    </Container>
  )
}
