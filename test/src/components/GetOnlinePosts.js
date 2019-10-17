import React, { Component } from 'react';

// get posts from online api
// it's return a json file
class GetOnlinePosts extends Component {
		constructor(props){
				super(props);
				this.state = {
						error : null,
						isLoaded : false,
						posts : []          
				};
		}
		componentDidMount(){
				fetch("https://jsonblob.com/api/jsonBlob/7a95ec42-f0a0-11e9-83ca-b3e4705c05fc")
				.then( response => response.json())
				.then(
						// handle the result
						(result) => {
								this.setState({
										isLoaded : true,
										posts : result
								});
						},
						// Handle error 
						(error) => {
								this.setState({
										isLoaded: true,
										error
								})
						},
				)
		}
		render() {
				const {error, isLoaded, posts} = this.state;
				if(error){
						return <div>Error in loading</div>
				}else if (!isLoaded) {
						return <div>Loading ...</div>
				}else{
						return(

												posts.map(post => (
																<section className="post-excerpt">
																		<h3>{post.title}</h3>
																		<p className="author">{post.author}</p>
																		<p className="date">{post.date}</p>
																		<p className="excerpt">{post.text}</p>
																</section>
																
												))
										
						);
				}

		}
	}

	export default GetOnlinePosts;