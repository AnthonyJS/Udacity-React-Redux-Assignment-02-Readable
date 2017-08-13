import axios from 'axios'
import uuid from 'uuid/v4'

export const GET_POSTS = 'GET_POSTS'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const UPVOTE_POST = 'UPVOTE_POST'
export const DOWNVOTE_POST = 'UPVOTE_POST'

export function GetPosts() {
    return dispatch => {
        axios
            .get('http://localhost:5001/posts', {
                headers: { Authorization: 'hello' }
            })
            .then(res => res.data)
            .then(data => {
                dispatch({
                    type: GET_POSTS,
                    payload: data
                })
            })
    }
}

export function AddPost(post) {
    const params = {
        id: uuid(),
        timestamp: Date.now(),
        title: post.title,
        body: post.body,
        author: post.author,
        category: post.category
    }
    const config = {
        headers: {
            authorization: 'hello'
        }
    }

    return dispatch => {
        axios.post('http://localhost:5001/posts', params, config).then(data => {
            dispatch({
                type: ADD_POST,
                payload: params
            })
        })
    }
}

export function EditPost(post) {
    // Send data to API
    return {
        type: EDIT_POST,
        payload: post
    }
}
