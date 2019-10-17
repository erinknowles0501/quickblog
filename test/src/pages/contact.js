import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <p>Blah blah 2 business days</p>
		
		<textarea>helllllo</textarea>
		
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
