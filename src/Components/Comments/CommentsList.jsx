import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { GetCommentsByPostId } from '../../Features/Comments/CommentActions'
import CommentRow from './CommentRow'

class CommentsList extends Component {
    componentDidMount() {
        const { getCommentsByPostId, postId } = this.props

        getCommentsByPostId(postId)
    }

    render() {
        const { comments } = this.props

        return (
            <div>
                <ul>
                    {comments.map(comment => (
                        <CommentRow key={comment.id} comment={comment} />
                    ))}
                </ul>
            </div>
        )
    }
}

CommentsList.propTypes = {
    getCommentsByPostId: PropTypes.func.isRequired,
    postId: PropTypes.string.isRequired,
    comments: PropTypes.array
}

const mapStateToProps = (state, ownProps) => ({
    comments: Object.values(state.comments).filter(
        comment => comment.parentId === ownProps.postId
    )
})

const mapDispatchToProps = dispatch => ({
    getCommentsByPostId: id => dispatch(GetCommentsByPostId(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList)
