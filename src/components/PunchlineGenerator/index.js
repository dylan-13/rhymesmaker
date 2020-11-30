import React from "react"
import Button from "../Button"
import TextArea from "../TextArea"

import {
  PunchlineGeneratorContainer,
  PunchlineGeneratorButton,
  PunchlineGeneratorTextArea,
} from "./PunchlineGenerator.module.css"

const PunchlineGenerator = () => {
  return (
    <div className={PunchlineGeneratorContainer}>
      <TextArea
        label="Générateur de punchlines"
        placeholder="rentrez une phrase ici..."
      />
      <Button
        className={PunchlineGeneratorButton}
        onClick={() => console.log("ButtonClick")}
        content="Rechercher"
      />
      <TextArea
        className={PunchlineGeneratorTextArea}
        disabled
      />
    </div>
  )
}

export default PunchlineGenerator
