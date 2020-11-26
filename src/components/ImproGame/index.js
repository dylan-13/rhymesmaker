import React from "react"
import Select from "../../components/Select"
import { PageRow, SearchInput, SearchSelect } from "./ImproGame.module.css"

const ImproGame = () => {
  return (
    <>
      <h1>Mini-jeu d’impro freestyle</h1>
      <div className={PageRow}>
        <Input
          className={SearchInput}
          placeholder="mot ou terminaison.."
          label="rime en"
          autoFocus
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
          className={SearchSelect}
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
    </>
  )
}

export default ImproGame
