/** @jsx jsx */
import { jsx, Box, Button } from "theme-ui"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 sx={{
      padding: 4,
    }}>Hi people</h1>
    <div sx={{
      marginBottom: `1.45rem`,
      maxWidth: `300px`
    }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
