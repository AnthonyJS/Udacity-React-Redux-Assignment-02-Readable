import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { orderBy } from 'lodash'
import { GetCommentsByPostId } from '../../Features/Comments/commentActions'
import CommentRow from './CommentRow'
import { UpdateCommentSortBy } from '../../Features/Display/displayActions'

class CommentsList extends Component {
    componentDidMount() {
        const { postId } = this.props

        this.props.GetCommentsByPostId(postId)
    }

    render() {
        const { comments, sortBy } = this.props

        const sortedComments = orderBy(
            comments,
            [sortBy, 'timestamp'],
            ['desc']
        )

        return (
            <div>
                {sortedComments.length > 0 && (
                    <div>
                        <h2>Comments</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <a
                                            role="button"
                                            onClick={() =>
                                                this.props.UpdateCommentSortBy(
                                                    'timestamp'
                                                )}
                                        >
                                            Timestamp
                                        </a>
                                    </th>
                                    <th>Body</th>
                                    <th>Author</th>
                                    <th>Modify</th>
                                    <th>
                                        <a
                                            role="button"
                                            onClick={() =>
                                                this.props.UpdateCommentSortBy(
                                                    'voteScore'
                                                )}
                                        >
                                            Vote
                                        </a>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedComments.map(comment => (
                                    <CommentRow
                                        key={comment.id}
                                        comment={comment}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        )
    }
}

CommentsList.propTypes = {
    GetCommentsByPostId: PropTypes.func.isRequired,
    postId: PropTypes.string.isRequired,
    comments: PropTypes.array,
    sortBy: PropTypes.string.isRequired,
    UpdateCommentSortBy: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
    comments: Object.values(state.comments).filter(
        comment => comment.parentId === ownProps.postId
    ),
    sortBy: state.display.commentSortBy
})

export default connect(mapStateToProps, {
    GetCommentsByPostId,
    UpdateCommentSortBy
})(CommentsList)
