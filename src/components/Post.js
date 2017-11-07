import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class Post extends Component {

    componentDidMount() {

        this.props.fetchPost(this.props.match.params.id);
    }

    render() {
        
        const { post } = this.props;
        
        if(!post) {
            
            return (
                <div>
                    <header><h1>Loading...</h1></header>
                    <section className="cd-container inner"></section>
                </div>
            );
        }

        return(
            
            <div>
                <header>
					<h1>{this.props.post.title.rendered}</h1>
				</header>

				<section className="cd-container inner">
                    <p>{
                        this.props.post.content.rendered.replace(/\<(.*?)\>/g, '').replace(/\[(.*?)\]/g, '')}</p>

                    <br />

                    <Link to="/" className="btn btn-default">Go back</Link>
                </section>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {

    return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost })(Post);