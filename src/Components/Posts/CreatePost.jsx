import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import PostForm from './PostForm'
import { AddPost } from '../../Features/Posts/postActions'

const CreatePost = ({ addPost, category }) => {
    const handleSubmit = values => {
        const newPost = {
            ...values,
            category
        }

        addPost(newPost)
    }

    return (
        <div style={{ backgroundColor: '#eeeeee' }}>
            Add post<PostForm
                onSubmit={handleSubmit}
                initialValues={{}}
                enableReinitialize
            />
        </div>
    )
}

CreatePost.propTypes = {
    addPost: PropTypes.func.isRequired,
    category: PropTypes.string.isRequired
}

const mapDispatchToProps = dispatch => ({
    addPost: post => dispatch(AddPost(post))
})

export default connect(null, mapDispatchToProps)(CreatePost)
