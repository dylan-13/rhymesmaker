import React from "react"
import Input from "../../components/Input"
import Button from "../../components/Button"
import {
  Container,
  PageRow,
  SearchInput,
  SearchButton,
} from "./SearchRhymes.module.css"

const SearchRhymes = () => {
  return (
    <div className={Container}>
      <h1>Recherche complète de rimes</h1>
      <div className={PageRow}>
        <Input
          className={SearchInput}
          placeholder="mot ou terminaison.."
          label="rime en"
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
        />
        <Button
          className={SearchButton}
          onClick={() => console.log("ButtonClick")}
          content="Rechercher"
        />
      </div>
    </div>
  )
}

export default SearchRhymes
