import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'

const Wrapper = styled.main`
  margin: 0 auto;
  max-width: 960px;
  min-height: calc(100vh - 110px);
  padding: 40px;

  @media (max-width: 600px) {
    padding: 40px 20px 0;
  }
`

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  )
}
