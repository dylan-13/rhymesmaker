import React from "react"
import Input from "../Input"
import Select from "../Select"
import Button from "../Button"
import {
  Container,
  PageRow,
  SearchInput,
  SearchSelect,
  SearchLongSelect,
  SearchButton,
} from "./ImproGame.module.css"

const ImproGame = () => {
  return (
    <div className={Container}>
      <h1>Mini-jeu d’impro freestyle</h1>
      <div className={PageRow}>
        <Input
          className={SearchInput}
          placeholder="mot ou terminaison.."
          label="rime en"
        />
        <Select
          name="difficulty"
          className={SearchSelect}
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
          className={SearchLongSelect}
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
          className={SearchButton}
          onClick={() => console.log("ButtonClick")}
          content="Go"
        />
      </div>
    </div>
  )
}

export default ImproGame
