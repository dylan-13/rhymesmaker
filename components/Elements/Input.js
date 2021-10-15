import styled from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  max-width: 300px;
  height: 40px;
  padding: 2px 8px;
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

const Input = ({ label, name, ...props }) => {
  return (
    <>
      <label style={{ display: `none` }} htmlFor={name}>
        {label}
      </label>
      <StyledInput id={name} {...props} />
    </>
  )
}

export default Input
