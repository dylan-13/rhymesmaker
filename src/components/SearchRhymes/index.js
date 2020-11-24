import React from "react"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { PageRow, SearchInput, SearchButton } from "./SearchRhymes.module.css"

const SearchRhymes = () => (
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
    </div>
  </>
)

export default SearchRhymes
