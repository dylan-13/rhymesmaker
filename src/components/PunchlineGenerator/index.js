import React, { useState } from "react"
import Button from "../Elements/Button"
import TextArea from "../Elements/TextArea"

import {
  PunchlineGeneratorContainer,
  PunchlineGeneratorButton,
  PunchlineGeneratorTextArea,
} from "./PunchlineGenerator.module.css"

const PunchlineGenerator = () => {
  const [showResult, setShowResult] = useState(false)
  return (
    <div className={PunchlineGeneratorContainer}>
      <TextArea
        label="Générateur de punchlines"
        placeholder="rentrez une phrase ici..."
      />
      <Button
        className={PunchlineGeneratorButton}
        onClick={() => setShowResult(true)}
        content="Rechercher"
      />
      {showResult && (
        <TextArea className={PunchlineGeneratorTextArea} disabled />
      )}
    </div>
  )
}

export default PunchlineGenerator
