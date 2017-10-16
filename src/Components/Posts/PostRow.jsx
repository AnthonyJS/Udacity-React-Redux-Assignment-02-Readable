import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import dateFormat from 'dateformat'
import styled from 'styled-components'
import PostVote from './PostVote'
import PostModifyControls from './PostModifyControls'
import { DATE_FORMAT } from '../../Common/enums'

const Td = styled.td`
    width: ${props => (props.width ? props.width : '150px')};
    text-align: left;
`

const PostRow = ({ id, timestamp, title, body, author, category }) => (
    <tr key={id}>
        <Td>{dateFormat(timestamp, DATE_FORMAT)}</Td>
        <Td width="300">
            <Link to={`/posts/${id}`}>{title}</Link>
        </Td>
        <Td width="300">{body}</Td>
        <Td>{author}</Td>
        <Td>{category}</Td>
        <Td>
            <PostModifyControls id={id} category={category} />
        </Td>
        <Td>
            <PostVote id={id} />
        </Td>
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
