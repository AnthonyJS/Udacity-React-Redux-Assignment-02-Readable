import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AddPost, UpdateUnsavedPost } from '../../actions/postActions'

class CreatePost extends Component {
    changeHandler = event => {
        const fieldToUpdate = event.target.name
        const newValue = event.target.value

        this.props.updateUnsavedPost(fieldToUpdate, newValue)
    }

    submitHandler = event => {
        event.preventDefault()

        this.props.addPost(this.props.fieldData)
    }

    render() {
        const { title, body, author } = this.props.fieldData

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={this.changeHandler}
                    />
                    <input
                        type="text"
                        id="body"
                        name="body"
                        value={body}
                        onChange={this.changeHandler}
                    />
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={author}
                        onChange={this.changeHandler}
                    />
                    <input type="submit" value="submitty" />
                </form>
            </div>
        )
    }
}

CreatePost.propTypes = {}

const mapStateToProps = state => ({
    fieldData: state.content.unsavedPost
})

const mapDispatchToProps = dispatch => ({
    addPost: post => dispatch(AddPost(post)),
    updateUnsavedPost: (fieldToUpdate, newValue) =>
        dispatch(UpdateUnsavedPost(fieldToUpdate, newValue))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)
