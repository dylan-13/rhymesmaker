import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Image } from "../images"

import { Container, IconImg, TypoImg } from "./Header.module.css"

const Header = ({ siteTitle }) => (
  <header className={Container}>
    <Image name="iconstars.png" alt="rhymesmaker logo" className={IconImg} />
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <Image name="logo.png" alt="rhymesmaker typo logo" className={TypoImg} />
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `rhymesmaker`,
}

export default Header
