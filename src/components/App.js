import React, { Component } from 'react';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import iconPicture from '../img/cd-icon-picture.svg';
import iconMovie from '../img/cd-icon-movie.svg';
import iconLocation from '../img/cd-icon-location.svg';

class App extends Component {
	    
    componentDidMount() {
		
		this.props.fetchPosts();
	}

	render() {

		if (this.props.posts === null) {
			
			return(
				<div>
					<header>
						<h1>Whitekennel posts</h1>
					</header>
					
					<h3 className="text-center">Loading...</h3>
				</div>
			)
		}

		return (
			<div>
				<header>
					<h1>Whitekennel posts</h1>
				</header>

				<section id="cd-timeline" className="cd-container">

				{
					_.map(this.props.posts, post => {
						return (
							
							<div className="cd-timeline-block" key={post.id}>
								<div className="cd-timeline-img cd-picture">
									<img src={iconPicture} alt="Imagem" />
								</div> 
		
								<div className="cd-timeline-content">
									<h2>{post.title.rendered}</h2>

									<p>{post.excerpt.rendered.replace(/\<(.*?)\>/g, '')}</p>

									<Link to={`/${post.id}`} className="cd-read-more">Read more</Link>

									<span className="cd-date">{_.split(post.date, 'T', 1)}</span>
								</div> 
							</div> 
						)
					})
				}

				</section>
			</div>
		);
	}
}

function mapStateToProps({ posts }) {

	return { posts }
}

export default connect(mapStateToProps, { fetchPosts } )(App);
