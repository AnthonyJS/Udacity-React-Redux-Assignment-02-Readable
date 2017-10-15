import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import PostForm from './PostForm'
import { AddPost } from '../../Features/Posts/postActions'

const CreatePost = ({ addPost, history }) => {
    const handleSubmit = values => {
        const newPost = {
            ...values
        }

        addPost(newPost)
        history.goBack()
    }

    return (
        <div style={{ backgroundColor: '#eeeeee' }}>
            <Link to="/">Go to all</Link>
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
    history: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => ({
    addPost: post => dispatch(AddPost(post))
})

export default withRouter(connect(null, mapDispatchToProps)(CreatePost))
