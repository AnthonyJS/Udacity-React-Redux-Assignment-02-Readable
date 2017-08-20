import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AddPost } from '../../actions/postActions'

class CreatePost extends Component {
    state = {}

    changeHandler = event => {
        this.setState({
            post: {
                ...this.state.post,
                [event.target.name]: event.target.value
            }
        })
    }

    submitHandler = event => {
        event.preventDefault()
        this.props.submitPost(this.state.post)
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
