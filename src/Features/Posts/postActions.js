import {
    getPosts,
    getPostById,
    deletePost,
    addPost,
    updatePost,
    updatePostVote
} from './postData'

export const GET_POSTS = 'GET_POSTS'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const UP_VOTE_POST = 'UP_VOTE_POST'
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST'
export const GET_POST_BY_ID = 'GET_POST_BY_ID'

export const GetPosts = category => dispatch =>
    getPosts(category).then(data => {
        dispatch({
            type: GET_POSTS,
            payload: data
        })
    })

export const GetPostById = id => dispatch =>
    getPostById(id).then(data => {
        dispatch({
            type: GET_POST_BY_ID,
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

export const AddPost = vals => {
    const post = {
        ...vals,
        timestamp: Date.now(),
        isDeleted: false,
        voteScore: 1
    }

    return dispatch =>
        addPost(post).then(() => {
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
