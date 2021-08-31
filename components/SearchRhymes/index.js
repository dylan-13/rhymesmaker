import Input from "../../components/Elements/Input";
import Button from "../../components/Elements/Button";
import { Container, PageRow, SearchTitle } from "./SearchRhymes.module.css";

export default function SearchRhymes() {
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
  );
}
