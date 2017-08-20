import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AddPost } from '../../actions/postActions'

class CreatePost extends Component {
    post = {
        title: '',
        body: '',
        author: ''
    }

    changeHandler = event => {
        switch (event.target.name) {
            case 'title':
                this.post.title = event.target.value
                break
            case 'body':
                this.post.body = event.target.value
                break
            case 'author':
                this.post.author = event.target.value
                break
            default:
                break
        }
    }

    submitHandler = event => {
        event.preventDefault()

        this.props.submitPost(this.post)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={this.changeHandler}
                    />
                    <input
                        type="text"
                        id="body"
                        name="body"
                        onChange={this.changeHandler}
                    />
                    <input
                        type="text"
                        id="author"
                        name="author"
                        onChange={this.changeHandler}
                    />
                    <input type="submit" value="submitty" />
                </form>
            </div>
        )
    }
}

CreatePost.propTypes = {}

const mapDispatchToProps = dispatch => ({
    submitPost: post => dispatch(AddPost(post))
})

export default connect(null, mapDispatchToProps)(CreatePost)
