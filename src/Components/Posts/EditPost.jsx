import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import PostForm from './PostForm'
import { UpdatePost } from '../../Features/Posts/postActions'

const EditPost = ({ initialValues, updatePost, history }) => {
    const handleSubmit = values => {
        updatePost(values)
        history.goBack()
    }

    return (
        <div>
            <Link to="/">Go to all</Link>
            Edit post
            <PostForm
                onSubmit={handleSubmit}
                initialValues={initialValues}
                enableReinitialize
            />
        </div>
    )
}

EditPost.propTypes = {
    initialValues: PropTypes.object.isRequired,
    updatePost: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
}

const mapStateToProps = ({ posts }, { postId }) => ({
    initialValues: posts[postId]
})

const mapDispatchToProps = dispatch => ({
    updatePost: post => dispatch(UpdatePost(post))
})

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(EditPost)
)
