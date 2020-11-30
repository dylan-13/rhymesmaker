import React from "react"
import { string } from "prop-types"
import { InputCss } from "./Input.module.css"

const Input = ({ label, name, className, ...props }) => {
  return (
    <>
      <label style={{ display: `none` }} htmlFor={name}>
        {label}
      </label>
      <input className={[InputCss, className].join(" ")} id={name} {...props} />
    </>
  )
}

Input.propTypes = {
  label: string,
  name: string,
  className: string,
}

Input.defaultProps = {
  label: "",
  name: "",
  className: "",
}

export default Input
