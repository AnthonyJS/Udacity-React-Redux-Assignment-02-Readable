import React from 'react'
import PropTypes from 'prop-types'
import dateFormat from 'dateformat'
import CommentVote from './CommentVote'
import CommentModifyControls from './CommentModifyControls'
import { DATE_FORMAT } from '../../Common/enums'
import { Tr, Td } from '../../Common/styles'

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
