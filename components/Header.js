import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

const Container = styled.header`
  background: rgba(11, 0, 12, 0.6);
  border-top: 1px solid rgba(11, 0, 12, 0.1);
  border-bottom: 1px solid rgba(11, 0, 12, 0.1);
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
`

const PageCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  width: 120px;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  padding-bottom: 2px;
  :focus {
    border: none;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
`

const UnderlineButton = styled.span`
  padding-top: 2px;
  border-bottom: 1px solid #662e91;
  width: 50px;
`

const TypoImg = styled(Image)`
  @media (max-width: 360px) {
    display: none;
  }
`

export default function Header() {
  return (
    <Container>
      <Link href="/" passHref>
        <a style={{ margin: '0 20px' }}>
          <Image src="/icon.png" alt="rhymesmaker logo" width={60} height={60} />
        </a>
      </Link>
      <Link href="/" passHref>
        <a style={{ flex: 'auto' }}>
          <TypoImg src="/logo.png" alt="rhymesmaker typo logo" width={140} height={24.5} />
        </a>
      </Link>
      <PageCol>
        <Button>Francais</Button>
        <UnderlineButton />
      </PageCol>
    </Container>
  )
}
