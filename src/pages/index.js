// src/pages/index.js
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"
import Home from "../components/home/Home"
import Hero from "../components/Hero/Hero"

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Helmet>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Helmet>
      <Hero />
      <Home />
    </Layout>
  )
}

export default HomePage

export const Head = () => <Seo title="Inicio" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
