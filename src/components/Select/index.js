import React from "react"
import { SelectCss, AnimatedButton } from "./Select.module.css"
import Select, { components } from "react-select"

const StyledSelect = ({ name, className, ...props }) => {
  const IndicatorsContainer = props => {
    return (
      <div className={AnimatedButton}>
        <components.IndicatorsContainer {...props} />
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
        components={{ IndicatorsContainer }}
        {...props}
      />
    </>
  )
}

export default StyledSelect
