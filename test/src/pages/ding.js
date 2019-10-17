import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Ding = () => (
  <Layout>
    <SEO title="Ding!!" />
    <h1>Hi my am ding</h1>
    <p>Is good</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Ding