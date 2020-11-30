import React from "react"
import {
  SelectCss,
  SelectOption,
  AnimatedButton,
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
        isSearchable={false}
        components={{ IndicatorsContainer, Option }}
        styles={{
          indicatorSeparator: base => ({
            ...base,
            display: "none",
          }),
          control: base => ({
            ...base,
            borderRadius: 10,
            height: 38,
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
