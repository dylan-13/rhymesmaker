import React from "react"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { PageRow, SearchInput, SearchButton, SearchSelect } from "./SearchRhymes.module.css"
import Select from "../../components/Select"

const SearchRhymes = () => {
  return (
    <>
      <h1>Recherche complète de rimes</h1>
      <div className={PageRow}>
        <Input
          className={SearchInput}
          placeholder="mot ou terminaison.."
          label="rime en"
          autoFocus
        />
        <Button
          className={SearchButton}
          onClick={() => console.log("ButtonClick")}
          content="Rechercher"
        />
        <Select
          name="difficulty"
          className={SearchSelect}
          placeholder="Choisir la difficulté"
          options={[
            { value: "Facile", label: "Facile" },
            { value: "Moyen", label: "Moyen" },
            { value: "Difficile", label: "Difficile" },
          ]}
        />
      </div>
    </>
  )
}

export default SearchRhymes
