import React, { useState } from "react"
import {
  SelectCss,
  SelectOption,
  AnimatedButton,
  Focused,
} from "./Select.module.css"
import Select, { components } from "react-select"

const StyledSelect = ({ name, className, ...props }) => {
  const [focused, setFocused] = useState(false)

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
        className={[SelectCss, focused && Focused, className].join(" ")}
        components={{ IndicatorsContainer, Option }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        styles={{
          indicatorSeparator: base => ({
            ...base,
            display: "none",
          }),
          control: base => ({
            ...base,
            borderRadius: 10,
            height: 40,
          }),
          option: (base, { isSelected }) => ({
            ...base,
            backgroundColor: isSelected ? "#8E8E8E" : "#ffffff",
            color: isSelected ? "#ffffff" : "#18191a",
            "&:hover": {
              backgroundColor: "#3E4042",
              color: "#ffffff",
            },
          }),
        }}
        {...props}
      />
    </>
  )
}

export default StyledSelect
