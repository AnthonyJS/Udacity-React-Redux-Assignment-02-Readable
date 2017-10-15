import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import uuid from 'uuid/v4'
import PostForm from './PostForm'
import { AddPost } from '../../Features/Posts/postActions'

const CreatePost = ({ addPost, history, category }) => {
    const handleSubmit = values => {
        const newPost = {
            ...values,
            id: uuid()
        }

        addPost(newPost)
        history.push(`/${newPost.category}/${newPost.id}`)
    }

    return (
        <div style={{ backgroundColor: '#eeeeee' }}>
            Add post<PostForm
                onSubmit={handleSubmit}
                initialValues={{ category }}
                enableReinitialize
            />
            <button onClick={() => history.goBack()}>Cancel</button>
        </div>
    )
}

CreatePost.propTypes = {
    addPost: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    category: PropTypes.string
}

const mapDispatchToProps = dispatch => ({
    addPost: post => dispatch(AddPost(post))
})

export default withRouter(connect(null, mapDispatchToProps)(CreatePost))
