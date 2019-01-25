import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';
// import axios from 'axios';           // use with vanilla React

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    }
    this.onInputChange = this.onInputChange.bind(this); // Normal way of referencing events
  }

  onInputChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  onFormSubmit= (event) => {                           // Alternative to binding function to itself is to use arrow function
    event.preventDefault();

    let post =  {
      title: this.state.title,
      body: this.state.body
    }

    this.props.createPost(post);                    // pass form body to action function

    // axios ({                                     // For use with vanilla React
    //   method: 'post',
    //   url: "https://jsonplaceholder.typicode.com/posts",
    //   data: post
    // })
    // .then(response => {
    //   console.log(response);
    // })
    // .catch(error => {
    //   console.log(error);
    // })
    // this.setState({title: "", body: ""});

  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <h1><u>Add a Post</u></h1>
          <div className="form-group">
            <label>Title</label>
            <br />
            <input type="text" name="title" onChange={this.onInputChange} value={this.state.title} />
          </div>
          <br />
          <div className="form-group">
            <label>Body</label>
            <br />
            <textarea name="body" onChange={this.onInputChange} value={this.state.body} />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);

// export default PostForm;   use with vanilla React
