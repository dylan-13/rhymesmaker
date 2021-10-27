import Select from './Elements/Select'
import Button from './Elements/Button'
import styled from 'styled-components'

const Container = styled.div`
  margin: 40px 0;
`

const Title = styled.h1`
  font-size: 26px;
  @media (max-width: 600px) {
    font-size: 22px;
  }
`

const PageRowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const PageRow = styled.div`
  display: flex;
  margin: 10px 0;
  width: 100%;
  max-width: 420px;
`

const StyledSelect = styled(Select)`
  width: 210px;
`

const StyledLongSelect = styled(Select)`
  width: 100%;
`

export default function ImproGame() {
  return (
    <Container>
      <Title>Mini-jeu d’impro freestyle</Title>
      <PageRowWrapper>
        <PageRow>
          <StyledSelect
            name="ending"
            placeholder="Terminaison"
            options={[
              { value: 'a', label: 'a' },
              { value: 'an', label: 'an' },
              { value: 'b', label: 'b' },
              { value: 'e', label: 'e' },
              { value: 'f', label: 'f' },
              { value: 'g', label: 'g' },
              { value: 'gne', label: 'gne' },
              { value: 'er', label: 'er' },
              { value: 'd', label: 'd' },
              { value: 'i', label: 'i' },
              { value: 'il', label: 'il' },
              { value: 'in', label: 'in' },
              { value: 'ma', label: 'ma' },
              { value: 'me', label: 'me' },
              { value: 'o', label: 'o' },
              { value: 'on', label: 'on' },
              { value: 'u', label: 'u' },
              { value: 'un', label: 'un' }
            ]}
          />
          <StyledSelect
            name="difficulty"
            placeholder="Difficulté.."
            options={[
              { value: 'Facile', label: 'Facile' },
              { value: 'Moyen', label: 'Moyen' },
              { value: 'Difficile', label: 'Difficile' }
            ]}
          />
        </PageRow>
        <PageRow>
          <StyledLongSelect
            name="instru"
            placeholder="Type d'instrumentale.."
            options={[
              { value: 'Acoustique', label: 'Acoustique' },
              { value: 'Fast Rap', label: 'Fast Rap' },
              { value: 'Lo-Fi', label: 'Lo-Fi' },
              { value: 'Trap', label: 'Trap' },
              { value: 'Yencli', label: 'Yencli' }
            ]}
          />
          <Button onClick={() => console.log('ButtonClick')} content="Go" />
        </PageRow>
      </PageRowWrapper>
    </Container>
  )
}
