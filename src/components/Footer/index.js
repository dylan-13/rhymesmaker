import PropTypes from "prop-types"
import React from "react"
import "./Footer.module.css"

const Footer = ({ siteTitle }) => (
  <footer>
    © {new Date().getFullYear()}, {siteTitle} built with
    {` `}
    <a href="https://www.gatsbyjs.com">Gatsby</a>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: `rhymesmaker`,
}

export default Footer
