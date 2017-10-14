import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { UpdatePost, UpdateUnsavedPost } from '../../actions/postActions'

const EditPost = props => {
    const changeHandler = event => {
        const fieldToUpdate = event.target.name
        const newValue = event.target.value

        props.updateUnsavedPost(fieldToUpdate, newValue)
    }

    const submitHandler = event => {
        event.preventDefault()

        props.updatePost(props.fieldData)
    }

    const { title, body, author } = props.fieldData

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={changeHandler}
                />
                <input
                    type="text"
                    id="body"
                    name="body"
                    value={body}
                    onChange={changeHandler}
                />
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={author}
                    onChange={changeHandler}
                />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

EditPost.propTypes = {
    postId: PropTypes.number.isRequired
}

const mapStateToProps = (state, ownProps) => ({
    fieldData: state.content.posts[ownProps.postId]
})

const mapDispatchToProps = dispatch => ({
    updatePost: post => dispatch(UpdatePost(post)),
    updateUnsavedPost: (fieldToUpdate, newValue) =>
        dispatch(UpdateUnsavedPost(fieldToUpdate, newValue))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
