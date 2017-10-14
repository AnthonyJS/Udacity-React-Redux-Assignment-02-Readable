import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PostForm from './PostForm'
import { AddPost } from '../../actions/postActions'

const CreatePost = props => {
    const handleSubmit = values => {
        props.addPost(values)
    }

    return <PostForm onSubmit={handleSubmit} />
}

CreatePost.propTypes = {}

const mapDispatchToProps = dispatch => ({
    addPost: post => dispatch(AddPost(post))
})

export default connect(null, mapDispatchToProps)(CreatePost)
