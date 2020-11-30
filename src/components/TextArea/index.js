import React from "react"
import { string } from "prop-types"
import { TextAreaCss, LabelCss, InputCss } from "./TextArea.module.css"

const TextArea = ({ label, name, className, ...props }) => {
  return (
    <div className={TextAreaCss}>
      <label className={LabelCss} htmlFor={name}>
        {label}
      </label>
      <textarea
        className={[InputCss, className].join(" ")}
        id={name}
        {...props}
      />
    </div>
  )
}

TextArea.propTypes = {
  label: string,
  name: string,
  className: string,
}

TextArea.defaultProps = {
  label: "",
  name: "",
  className: "",
}

export default TextArea
