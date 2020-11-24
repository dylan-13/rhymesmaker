import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Image } from "../images"

import { Container, PageCol, IconImg, TypoImg } from "./Header.module.css"

const Header = ({ siteTitle }) => (
  <header className={Container}>
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <Image name="icon.png" alt="rhymesmaker logo" className={IconImg} />
    </Link>
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <Image name="logo.png" alt="rhymesmaker typo logo" className={TypoImg} />
    </Link>
    <div className={PageCol}>
      <button>Francais</button>
      <p />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `rhymesmaker`,
}

export default Header
