import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import dateFormat from 'dateformat'
import PostVote from './PostVote'
import PostModifyControls from './PostModifyControls'

const PostRow = ({ id, timestamp, title, body, author, category }) => (
    <li key={id}>
        <Link to={`/${category}/${id}`}>{id}</Link>
        <div>
            timestamp -{' '}
            {dateFormat(timestamp, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}
        </div>
        <div>title - {title}</div>
        <div>body - {body}</div>
        <div>author - {author}</div>
        <div>category - {category}</div>

        <PostModifyControls id={id} category={category} />
        <PostVote id={id} />
    </li>
)

PostRow.propTypes = {
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
}

export default PostRow
