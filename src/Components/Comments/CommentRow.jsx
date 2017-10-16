import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import dateFormat from 'dateformat'
import CommentVote from './CommentVote'
import CommentModifyControls from './CommentModifyControls'
import { DATE_FORMAT } from '../../Common/enums'

const Tr = styled.tr`
    :nth-child(odd) {
        background: #eee;
    }
`

const Td = styled.td`
    width: ${props => (props.width ? props.width : '150px')};
    text-align: left;
`

const CommentRow = ({ comment }) => (
    <Tr key={comment.id}>
        <Td>{dateFormat(comment.timestamp, DATE_FORMAT)}</Td>
        <Td width="300">{comment.body}</Td>
        <Td>{comment.author}</Td>
        <Td>
            <CommentModifyControls id={comment.id} />
        </Td>
        <Td>
            <CommentVote id={comment.id} />
        </Td>
    </Tr>
)

CommentRow.propTypes = {
    comment: PropTypes.object.isRequired
}

export default CommentRow
