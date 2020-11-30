import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SearchRhymes from "../components/SearchRhymes"
import ImproGame from "../components/ImproGame"
import PunchlineGenerator from "../components/PunchlineGenerator"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SearchRhymes />
    <ImproGame />
    <PunchlineGenerator />
  </Layout>
)

export default IndexPage
