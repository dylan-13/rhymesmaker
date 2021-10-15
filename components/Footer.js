import styled from 'styled-components'

const Container = styled.footer`
  padding: 10px;
  height: 50px;
  border-top: 1px solid #8e8e8e;
`
export default function Footer() {
  return (
    <Container>
      © {new Date().getFullYear()}, rhymesmaker built with
      {` `}
      <a href="https://nextjs.org">Next Js</a>
    </Container>
  )
}
