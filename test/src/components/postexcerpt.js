import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

//const PostExcerpt = () => {
//  <section className="post-excerpt">
//      <h3>{props.postTitle}</h3>
//			<p>{props.postText}</p>
//  </section>
//}

//export default PostExcerpt


export default (props) => (

<section class="post-excerpt">
	<h3>{props.postTitle}</h3>
	<p>{props.postText}</p>
</section>

)