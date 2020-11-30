import React from "react"
import Input from "../Input"
import Select from "../Select"
import Button from "../Button"
import {
  Container,
  PageRow,
  ImproGameTitle,
  ImproGameSelect,
  ImproGameLongSelect,
  ImproGameButton,
} from "./ImproGame.module.css"

const ImproGame = () => {
  return (
    <div className={Container}>
      <h1 className={ImproGameTitle}>Mini-jeu d’impro freestyle</h1>
      <div className={PageRow}>
        <Select
          name="ending"
          className={ImproGameSelect}
          placeholder="Terminaison"
          options={[
            { value: "a", label: "a" },
            { value: "an", label: "an" },
            { value: "b", label: "b" },
            { value: "e", label: "e" },
            { value: "f", label: "f" },
            { value: "g", label: "g" },
            { value: "gne", label: "gne" },
            { value: "er", label: "er" },
            { value: "d", label: "d" },
            { value: "i", label: "i" },
            { value: "il", label: "il" },
            { value: "in", label: "in" },
            { value: "ma", label: "ma" },
            { value: "me", label: "me" },
            { value: "o", label: "o" },
            { value: "on", label: "on" },
            { value: "u", label: "u" },
            { value: "un", label: "un" },
          ]}
        />
        <Select
          name="difficulty"
          className={ImproGameSelect}
          placeholder="Difficulté.."
          options={[
            { value: "Facile", label: "Facile" },
            { value: "Moyen", label: "Moyen" },
            { value: "Difficile", label: "Difficile" },
          ]}
        />
      </div>
      <div className={PageRow}>
        <Select
          name="instru"
          className={ImproGameLongSelect}
          placeholder="Type d'instrumentale.."
          options={[
            { value: "Acoustique", label: "Acoustique" },
            { value: "Fast Rap", label: "Fast Rap" },
            { value: "Lo-Fi", label: "Lo-Fi" },
            { value: "Trap", label: "Trap" },
            { value: "Yencli", label: "Yencli" },
          ]}
        />
        <Button
          className={ImproGameButton}
          onClick={() => console.log("ButtonClick")}
          content="Go"
        />
      </div>
    </div>
  )
}

export default ImproGame
