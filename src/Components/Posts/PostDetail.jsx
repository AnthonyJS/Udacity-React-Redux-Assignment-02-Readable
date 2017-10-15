import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { get } from 'lodash'
import { Link } from 'react-router-dom'
import dateFormat from 'dateformat'
import PostVote from './PostVote'
import PostModifyControls from './PostModifyControls'
import Comments from '../Comments'
import { GetPostById } from '../../Features/Posts/postActions'

const PostDetail = ({
    id,
    timestamp,
    title,
    body,
    author,
    category,
    match,
    getPostById
}) => {
    if (!title) {
        const idFromUrl = get(match, 'params.post_id')
        getPostById(idFromUrl)
        return <div>Loading...</div>
    }

    return (
        <div>
            <Link to={`/${category}`}>Link back to {category} category</Link>
            {title && (
                <div>
                    <div>id - {id}</div>
                    <div>
                        timestamp -{' '}
                        {dateFormat(
                            timestamp,
                            'dddd, mmmm dS, yyyy, h:MM:ss TT'
                        )}
                    </div>
                    <div>title - {title}</div>
                    <div>body - {body}</div>
                    <div>author - {author}</div>
                    <div>category - {category}</div>

                    <PostModifyControls id={id} />
                    <PostVote id={id} />
                </div>
            )}
            <Comments postId={id} />
        </div>
    )
}

PostDetail.propTypes = {
    id: PropTypes.string,
    timestamp: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
    getPostById: PropTypes.func.isRequired,
    match: PropTypes.object
}

const mapStateToProps = ({ posts }, ownProps) => ({
    ...posts[ownProps.match.params.post_id]
})

const mapDispatchToProps = dispatch => ({
    getPostById: id => dispatch(GetPostById(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
