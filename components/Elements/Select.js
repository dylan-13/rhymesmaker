import styled, { keyframes } from 'styled-components'
import Select, { components } from 'react-select'

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

const StyledSelect = styled(Select)`
  border: 1px solid #000000;
  font-size: 18px;
  color: #18191a;
  & > div {
    outline: none;
    border: none;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`

const SelectOption = styled.div`
  color: #18191a;
  background: #ffffff;
`

const AnimatedButton = styled.div`
  height: 35px;
  width: 35px;
  margin: 0px 2px 0 0;
  border-radius: 10px;
  background-image: linear-gradient(315deg, #e2038d 1%, #a92fe7 55%);
  background-size: 400% 400%;
  animation: ${colormoving} 6s ease infinite;
`

const CustomSelect = ({ name, ...props }) => {
  const IndicatorsContainer = (props) => {
    return (
      <AnimatedButton>
        <components.IndicatorsContainer {...props} />
      </AnimatedButton>
    )
  }

  const Option = (props) => {
    return (
      <SelectOption>
        <components.Option {...props} />
      </SelectOption>
    )
  }

  return (
    <>
      <label style={{ display: `none` }} htmlFor={name}>
        {name}
      </label>
      <StyledSelect
        name={name}
        isSearchable={false}
        components={{ IndicatorsContainer, Option }}
        styles={{
          indicatorSeparator: (base) => ({
            ...base,
            display: 'none'
          }),
          control: (base) => ({
            ...base,
            borderRadius: 10,
            height: 38
          }),
          option: (base, { isSelected }) => ({
            ...base,
            backgroundColor: isSelected ? '#8E8E8E' : '#ffffff',
            color: isSelected ? '#ffffff' : '#18191a',
            '&:hover': {
              backgroundColor: '#3E4042',
              color: '#ffffff'
            }
          })
        }}
        {...props}
      />
    </>
  )
}

export default CustomSelect
