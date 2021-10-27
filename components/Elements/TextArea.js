import TextareaAutosize from 'react-autosize-textarea'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Label = styled.label`
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  @media (max-width: 600px) {
    font-size: 22px;
  }
`

const StyledTextArea = styled(TextareaAutosize)`
  margin: 20px 0;
  width: 100%;
  min-height: 80px;
  resize: vertical;
  padding: 10px 8px;
  border: 1px solid #000000;
  font-size: 18px;
  color: #18191a;
  border-radius: 10px;
  ::placeholder {
    color: #808080;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
`

const TextArea = ({ label, name, ...props }) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <StyledTextArea id={name} {...props} onResize={(e) => {}} />
    </Container>
  )
}

export default TextArea
