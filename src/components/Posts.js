import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
// import axios from 'axios'; // Promise based http client for browsers and .js


class Posts extends Component {
  // constructor(props) {     // For use in vanilla react
  //   super(props);
  //   this.state = {
  //     posts: []
  //   }
  // }

  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);    // appends newPost from props to beginning of state array
    }
  }


  // componentDidMount() {      // For use in vanilla react to handle state
  //   // this.getPosts(); // alternative using async/await requires EcmaScript 2017 compatibility
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //   .then(response => {
  //     console.log(response);
  //     this.setState({posts: response.data});
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  // }

    // async getPosts() {
    //   try {
    //     let response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //     console.log(response.data);
    //     this.setState({posts: response.data});
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

  render() {
    // let postList = this.state.posts.map(post => (   // For use with vanilla React
    let postList = this.props.posts.map(post => (     // posts comes from fetchPosts()
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postList}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  newPost: PropTypes.object,
  posts: PropTypes.array.isRequired
}

let mapStatetoProps = state => ({
  posts: state.posts.items,      // variable name here is a reference to variable name in rootReducer from index.js of reducers folder
  newPost: state.posts.item   // takes a new post and appends to state as a new state object
});

export default connect(mapStatetoProps, { fetchPosts })(Posts);

// export default Posts; // For vanilla React
