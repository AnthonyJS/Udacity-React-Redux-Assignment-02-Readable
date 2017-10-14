import uuid from 'uuid/v4'
import {
    getPosts,
    deletePost,
    addPost,
    updatePost,
    updatePostVote
} from '../data/postData'

export const GET_POSTS = 'GET_POSTS'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const UP_VOTE_POST = 'UP_VOTE_POST'
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST'
export const CURRENT_POST_ID = 'CURRENT_POST_ID'

export const GetPosts = category => dispatch =>
    getPosts(category).then(data => {
        dispatch({
            type: GET_POSTS,
            payload: data
        })
    })

export const DeletePost = id => dispatch =>
    deletePost(id).then(() => {
        dispatch({
            type: DELETE_POST,
            payload: id
        })
    })

export const UpdateCurrentPostId = id => dispatch =>
    dispatch({
        type: CURRENT_POST_ID,
        payload: id
    })

export const AddPost = ({ title, body, author, category }) => {
    const post = {
        id: uuid(),
        timestamp: Date.now(),
        title,
        body,
        author,
        category
    }

    return dispatch =>
        addPost(post).then(data => {
            dispatch({
                type: ADD_POST,
                payload: post
            })
        })
}

export const UpdatePost = post => dispatch =>
    updatePost(post).then(() => {
        dispatch({
            type: EDIT_POST,
            payload: post
        })
    })

export const UpVotePost = id => dispatch =>
    updatePostVote({ id, option: 'upVote' }).then(() => {
        dispatch({
            type: UP_VOTE_POST,
            payload: id
        })
    })

export const DownVotePost = id => dispatch =>
    updatePostVote({ id, option: 'downVote' }).then(() => {
        dispatch({
            type: DOWN_VOTE_POST,
            payload: id
        })
    })
