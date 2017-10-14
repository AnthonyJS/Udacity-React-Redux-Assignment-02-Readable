import uuid from 'uuid/v4'
import { getPosts, deletePost, addPost, updatePost } from '../data/postData'

export const GET_POSTS = 'GET_POSTS'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const UPVOTE_POST = 'UPVOTE_POST'
export const DOWNVOTE_POST = 'UPVOTE_POST'
export const CURRENT_POST_ID = 'CURRENT_POST_ID'

export const GetPosts = () => dispatch =>
    getPosts().then(data => {
        dispatch({
            type: GET_POSTS,
            payload: data
        })
    })

export const DeletePost = id => dispatch =>
    deletePost(id).then(data => {
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
    updatePost(post).then(data => {
        dispatch({
            type: EDIT_POST,
            payload: post
        })
    })
