import React from "react"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { Container, PageRow, SearchTitle } from "./SearchRhymes.module.css"

const SearchRhymes = () => {
  return (
    <div className={Container}>
      <h1 className={SearchTitle}>Recherche complète de rimes</h1>
      <div className={PageRow}>
        <Input placeholder="mot ou terminaison.." label="rime en" />
        <Button
          onClick={() => console.log("ButtonClick")}
          content="Rechercher"
        />
      </div>
    </div>
  )
}

export default SearchRhymes
