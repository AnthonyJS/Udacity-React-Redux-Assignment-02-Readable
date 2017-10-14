import React from 'react'
import { connect } from 'react-redux'
import PostForm from './PostForm'
import PropTypes from 'prop-types'
import { AddPost } from '../../actions/postActions'

const CreatePost = ({ addPost }) => {
    const handleSubmit = values => {
        addPost(values)
    }

    return (
        <div>
            Create<PostForm
                onSubmit={handleSubmit}
                initialValues={{}}
                enableReinitialize
            />
        </div>
    )
}

CreatePost.propTypes = {
    addPost: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    addPost: post => dispatch(AddPost(post))
})

export default connect(null, mapDispatchToProps)(CreatePost)
