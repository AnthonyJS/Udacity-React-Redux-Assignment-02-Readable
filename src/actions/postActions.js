import axios from 'axios'

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
                console.log('data', data)
                dispatch({
                    type: GET_POSTS,
                    payload: data
                })
            })
    }
}

export function AddPost(post) {
    // Send data to API
    return {
        type: ADD_POST,
        payload: post
    }
}

export function EditPost(post) {
    // Send data to API
    return {
        type: EDIT_POST,
        payload: post
    }
}
