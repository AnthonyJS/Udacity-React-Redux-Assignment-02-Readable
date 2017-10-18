import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { get } from 'lodash'
import dateFormat from 'dateformat'
import styled from 'styled-components'
import PostVote from './PostVote'
import PostModifyControls from './PostModifyControls'
import Comments from '../Comments'
import * as actions from '../../Features/Posts/postActions'
import { DATE_FORMAT } from '../../Common/enums'
import { PostDiv } from '../../Common/styles'

const PostBodyDiv = styled.div`
    background-color: PowderBlue;
    font-size: 18pt;
    padding: 20px;
`

const PostDetail = ({
    id,
    timestamp,
    title,
    body,
    author,
    category,
    match,
    GetPostById
}) => {
    if (!title) {
        const idFromUrl = get(match, 'params.post_id')
        GetPostById(idFromUrl)
        return <div>Post not found</div>
    }

    return (
        <PostDiv>
            {title && (
                <div>
                    <h1>{title}</h1>
                    <PostVote id={id} />
                    <h2>by {author}</h2>
                    <h3>posted on {dateFormat(timestamp, DATE_FORMAT)}</h3>
                    <h4>in the {category} category</h4>
                    <PostBodyDiv>{body}</PostBodyDiv>
                    <div>
                        <PostModifyControls id={id} redirectAfterDelete />
                    </div>
                </div>
            )}
            <Comments postId={id} />
        </PostDiv>
    )
}

PostDetail.propTypes = {
    id: PropTypes.string,
    timestamp: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
    GetPostById: PropTypes.func.isRequired,
    match: PropTypes.object
}

const mapStateToProps = ({ posts }, ownProps) => ({
    ...posts[ownProps.match.params.post_id]
})

export default connect(mapStateToProps, actions)(PostDetail)
