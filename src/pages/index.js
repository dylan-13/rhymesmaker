import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchRhymes from "../components/SearchRhymes"
import ImproGame from "../components/ImproGame"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SearchRhymes />
    <ImproGame />
  </Layout>
)

export default IndexPage
