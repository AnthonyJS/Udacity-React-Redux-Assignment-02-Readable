import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import dateFormat from 'dateformat'
import PostVote from './PostVote'
import PostModifyControls from './PostModifyControls'
import { DATE_FORMAT } from '../../Common/enums'
import { Tr, Td } from '../../Common/styles'
import { TrimLongString } from '../../Common/textHelpers'

const PostRow = ({ id, timestamp, title, body, author, category }) => (
    <Tr key={id}>
        <Td>{dateFormat(timestamp, DATE_FORMAT)}</Td>
        <Td width="300">
            <Link to={`/posts/${id}`}>{title}</Link>
        </Td>
        <Td width="600">{TrimLongString(body)}</Td>
        <Td>{author}</Td>
        <Td>{category}</Td>
        <Td>
            <PostModifyControls id={id} category={category} />
        </Td>
        <Td>
            <PostVote id={id} />
        </Td>
    </Tr>
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
