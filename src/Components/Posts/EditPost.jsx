import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PostForm from './PostForm'
import { UpdatePost } from '../../Features/Posts/postActions'

const EditPost = ({ initialValues, updatePost }) => {
    const handleSubmit = values => {
        updatePost(values)
    }

    return (
        <div>
            Edit{' '}
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
    updatePost: PropTypes.func.isRequired
}

const mapStateToProps = ({ posts }, { postId }) => ({
    initialValues: posts[postId]
})

const mapDispatchToProps = dispatch => ({
    updatePost: post => dispatch(UpdatePost(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
