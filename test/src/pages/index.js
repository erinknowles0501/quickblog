import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
		<SEO title="Home" />
		<section className="left">
			<h3>Contact/suggest</h3>
		</section>
		<section className="right special">
			<h3>Aaaaa</h3>
			<p>skdjghskgjh sdkjgh sdjkgh sdkjghs kgjhsd kjg hskjg hs</p>
		</section>
		

    <Link to="/page-2/">Go to page 2</Link>
		<Link to="/ding">Dinjgggg</Link>
  </Layout>
)

export default IndexPage
