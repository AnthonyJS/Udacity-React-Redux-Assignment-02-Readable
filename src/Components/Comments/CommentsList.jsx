import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { orderBy } from 'lodash'
import { GetCommentsByPostId } from '../../Features/Comments/commentActions'
import CommentRow from './CommentRow'

class CommentsList extends Component {
    componentDidMount() {
        const { getCommentsByPostId, postId } = this.props

        getCommentsByPostId(postId)
    }

    render() {
        const { comments } = this.props

        const sortedComments = orderBy(comments, ['voteScore'], ['desc'])

        return (
            <div>
                <ul>
                    {sortedComments.map(comment => (
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
