import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import PostForm from './PostForm'
import { AddPost } from '../../actions/postActions'

const CreatePost = ({ addPost, category }) => {
    const handleSubmit = values => {
        values.category = category
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
    addPost: PropTypes.func.isRequired,
    category: PropTypes.string.isRequired
}

const mapDispatchToProps = dispatch => ({
    addPost: post => dispatch(AddPost(post))
})

export default connect(null, mapDispatchToProps)(CreatePost)
