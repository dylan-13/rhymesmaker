import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgba(11, 0, 12, 0.6)`,
      height: `60px`,
      fontFamily: `Londrina Solid`,
      fontSize: `26px`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        display: `flex`,
        alignItems: `center`,
      }}
    >
      <div style={{ width: `88px`, marginRight:`20px` }}>
        <Image />
      </div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
