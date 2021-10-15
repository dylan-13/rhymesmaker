import { useState } from 'react'
import styled from 'styled-components'
import Button from './Elements/Button'
import TextArea from './Elements/TextArea'

const Container = styled.div`
  margin: 40px 0;
  max-width: 420px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const StyledTextArea = styled(TextArea)`
  background: #242526;
  color: #ffffff;
`

export default function PunchlineGenerator() {
  const [showResult, setShowResult] = useState(false)

  return (
    <Container>
      <TextArea label="Générateur de punchlines" placeholder="rentrez une phrase ici..." />
      <Button onClick={() => setShowResult(true)} content="Complèter" />
      {showResult && <StyledTextArea disabled />}
    </Container>
  )
}
