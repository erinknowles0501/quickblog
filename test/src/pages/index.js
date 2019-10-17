import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PostExcerpt from "../components/postexcerpt"

import GetOnlinePosts from '../components/GetOnlinePosts';


// https://jsonblob.com/7a95ec42-f0a0-11e9-83ca-b3e4705c05fc





const IndexPage = () => (

  <Layout>
		<SEO title="Home" />
		<section className="left">
			<h3><Link to="/contact/">Contact/suggest</Link></h3>
			<h3>Browse/search</h3>
		</section>
		<a className="big" href="/page-2/">
			<section className="right special">
				<h3>Five reasons to hate bananas</h3>
				<p id="special">In this essay I will convince the western english-speaking world to never again eat bananas for they are treacherous and should be outlawed. Number one, they are a sickly yellow color, the color of jaundice, of pus, of sulphur. Nothing that yellow can be trusted. </p>
			</section>
		</a>
		
		<GetOnlinePosts/>

  </Layout>
)

//const myExtScript = require('../truncate.js')


export default IndexPage



