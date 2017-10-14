import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PostForm from './PostForm'
import { UpdatePost } from '../../actions/postActions'

const EditPost = props => {
    const handleSubmit = values => {
        props.updatePost(values)
    }

    return (
        <div>
            Edit{' '}
            <PostForm
                onSubmit={handleSubmit}
                initialValues={props.initialValues}
                enableReinitialize
            />
        </div>
    )
}

EditPost.propTypes = {
    postId: PropTypes.string.isRequired
}

const mapStateToProps = (state, ownProps) => ({
    initialValues: state.content.posts[ownProps.postId]
})

const mapDispatchToProps = dispatch => ({
    updatePost: post => dispatch(UpdatePost(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
