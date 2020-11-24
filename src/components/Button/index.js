import React from "react"
import { string } from "prop-types"
import { ButtonCss } from "./Button.module.css"

const Button = ({ content, className, ...props }) => {
  return (
    <button className={[ButtonCss, className].join(" ")} {...props}>
      {content}
    </button>
  )
}

Button.propTypes = {
  content: string,
  className: string,
}

Button.defaultProps = {
  content: "",
  className: "",
}

export default Button
