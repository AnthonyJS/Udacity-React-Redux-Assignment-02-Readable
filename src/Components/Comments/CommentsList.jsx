import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { orderBy } from 'lodash'
import { GetCommentsByPostId } from '../../Features/Comments/commentActions'
import CommentRow from './CommentRow'
import { UpdateCommentSortBy } from '../../Features/Display/displayActions'

class CommentsList extends Component {
    componentDidMount() {
        const { getCommentsByPostId, postId } = this.props

        getCommentsByPostId(postId)
    }

    render() {
        const { comments, sortBy, setCommentSortBy } = this.props

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
                                                setCommentSortBy('timestamp')}
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
                                                setCommentSortBy('voteScore')}
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
    getCommentsByPostId: PropTypes.func.isRequired,
    postId: PropTypes.string.isRequired,
    comments: PropTypes.array,
    sortBy: PropTypes.string.isRequired,
    setCommentSortBy: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
    comments: Object.values(state.comments).filter(
        comment => comment.parentId === ownProps.postId
    ),
    sortBy: state.display.commentSortBy
})

const mapDispatchToProps = dispatch => ({
    getCommentsByPostId: id => dispatch(GetCommentsByPostId(id)),
    setCommentSortBy: sortBy => dispatch(UpdateCommentSortBy(sortBy))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList)
