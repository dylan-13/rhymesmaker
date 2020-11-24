import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchRhymes from "../components/SearchRhymes"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SearchRhymes />
  </Layout>
)

export default IndexPage
