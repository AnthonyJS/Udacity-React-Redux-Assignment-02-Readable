import React from 'react'
import { connect } from 'react-redux'
import PostForm from './PostForm'
import { AddPost } from '../../actions/postActions'

const CreatePost = props => {
    const handleSubmit = values => {
        props.addPost(values)
    }

    return (
        <div>
            Create<PostForm onSubmit={handleSubmit} enableReinitialize />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addPost: post => dispatch(AddPost(post))
})

export default connect(null, mapDispatchToProps)(CreatePost)
