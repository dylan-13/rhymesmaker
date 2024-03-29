import styled, { keyframes } from 'styled-components'

const colormoving = keyframes`
  0% {
    background-position: 0% 46%;
  }
  50% {
    background-position: 100% 55%;
  }
  100% {
    background-position: 0% 46%;
  }
`

const StyledButton = styled.button`
  max-width: 140px;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #000000;
  font-size: 18px;
  color: #ffffff;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  background-image: linear-gradient(315deg, #e2038d 1%, #a92fe7 55%);
  background-size: 400% 400%;
  animation: ${colormoving} 6s ease infinite;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`

const Button = ({ content, className, ...props }) => {
  return (
    <StyledButton className={className} {...props}>
      {content}
    </StyledButton>
  )
}

export default Button
