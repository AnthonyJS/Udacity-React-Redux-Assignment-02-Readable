import uuid from 'uuid/v4'
import { getPosts, deletePost, addPost } from '../data/postData'

export const GET_POSTS = 'GET_POSTS'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const UPVOTE_POST = 'UPVOTE_POST'
export const DOWNVOTE_POST = 'UPVOTE_POST'

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

export const AddPost = ({ title, body, author, category }) => {
    const params = {
        id: uuid(),
        timestamp: Date.now(),
        title: title,
        body: body,
        author: author,
        category: category
    }

    return dispatch =>
        addPost(params).then(data => {
            dispatch({
                type: ADD_POST,
                payload: params
            })
        })
}

export const UpdatePost = post => {
    // TODO: Send data to API
    return {
        type: EDIT_POST,
        payload: post
    }
}
