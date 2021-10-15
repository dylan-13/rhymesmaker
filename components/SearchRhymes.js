import Input from './Elements/Input'
import Button from './Elements/Button'
import styled from 'styled-components'

const Container = styled.section`
  margin: 0;
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

export default function SearchRhymes() {
  return (
    <Container>
      <SearchTitle>Recherche complète de rimes</SearchTitle>
      <PageRow>
        <Input placeholder="mot ou terminaison.." label="rime en" />
        <Button onClick={() => console.log('ButtonClick')} content="Rechercher" />
      </PageRow>
    </Container>
  )
}
