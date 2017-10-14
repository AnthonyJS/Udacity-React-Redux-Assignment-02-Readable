import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import dateFormat from 'dateformat'
import PostVote from './PostVote'
import { UpdateCurrentPostId } from '../../actions/postActions'

const PostRow = ({
    id,
    timestamp,
    title,
    body,
    author,
    category,
    updateCurrentPostId,
    deleteHandler
}) => (
    <li key={id}>
        <Link to={`/${category}/${id}`} onClick={() => updateCurrentPostId(id)}>
            {id}
        </Link>

        <div>
            timestamp -{' '}
            {dateFormat(timestamp, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}
        </div>
        <div>title - {title}</div>
        <div>body - {body}</div>
        <div>author - {author}</div>
        <div>category - {category}</div>

        <button
            value="edit"
            onClick={() => {
                updateCurrentPostId(id)
            }}
        >
            Edit
        </button>
        <button onClick={e => deleteHandler(e, id)}>Delete</button>
        <PostVote id={id} />
    </li>
)

PostRow.propTypes = {
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    updateCurrentPostId: PropTypes.func.isRequired,
    deleteHandler: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    updateCurrentPostId: id => dispatch(UpdateCurrentPostId(id))
})

export default connect(null, mapDispatchToProps)(PostRow)
