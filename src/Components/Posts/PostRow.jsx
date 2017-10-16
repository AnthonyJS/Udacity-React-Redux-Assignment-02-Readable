import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import dateFormat from 'dateformat'
import PostVote from './PostVote'
import PostModifyControls from './PostModifyControls'
import { DATE_FORMAT } from '../../Common/enums'

const PostRow = ({ id, timestamp, title, body, author, category }) => (
    <tr key={id}>
        <td>{dateFormat(timestamp, DATE_FORMAT)}</td>
        <td>
            <Link to={`/posts/${id}`}>{title}</Link>
        </td>
        <td>{body}</td>
        <td>{author}</td>
        <td>{category}</td>
        <td>
            <PostModifyControls id={id} category={category} />
        </td>
        <td>
            <PostVote id={id} />
        </td>
    </tr>
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
