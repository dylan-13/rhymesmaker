import React from "react"
import {
  SelectCss,
  SelectMenu,
  SelectOption,
  AnimatedButton,
  Test,
} from "./Select.module.css"
import Select, { components } from "react-select"

const StyledSelect = ({ name, className, ...props }) => {
  const IndicatorsContainer = props => {
    return (
      <div className={AnimatedButton}>
        <components.IndicatorsContainer {...props} />
      </div>
    )
  }

  const Option = props => {
    return (
      <div className={SelectOption}>
        <components.Option className={SelectOption} {...props} />
      </div>
    )
  }

  return (
    <>
      <label style={{ display: `none` }} htmlFor={name}>
        {name}
      </label>
      <Select
        name={name}
        className={[SelectCss, className].join(" ")}
        components={{ IndicatorsContainer, Option }}
        {...props}
      />
    </>
  )
}

export default StyledSelect
