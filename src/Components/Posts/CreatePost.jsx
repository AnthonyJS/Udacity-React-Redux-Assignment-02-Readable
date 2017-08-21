import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AddPost, UpdateUnsavedPost } from '../../actions/postActions'

const CreatePost = props => {
    const changeHandler = event => {
        const fieldToUpdate = event.target.name
        const newValue = event.target.value

        props.updateUnsavedPost(fieldToUpdate, newValue)
    }

    const submitHandler = event => {
        event.preventDefault()

        props.addPost(props.fieldData)
    }

    const { title, body, author } = props.fieldData

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={changeHandler}
                />
                <input
                    type="text"
                    id="body"
                    name="body"
                    value={body}
                    onChange={changeHandler}
                />
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={author}
                    onChange={changeHandler}
                />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
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
