import axios from 'axios'
import { Header, ROOT_URL } from '../../Common/header'

export const getCommentsByPostId = id =>
    axios.get(`${ROOT_URL}/posts/${id}/comments`, Header).then(res => res.data)

export const updateCommentVote = params =>
    axios.post(`${ROOT_URL}/comments/${params.id}`, params, Header)

export const addComment = params =>
    axios.post(`${ROOT_URL}/comments`, params, Header)

export const deleteComment = id =>
    axios.delete(`${ROOT_URL}/comments/${id}`, Header).then(res => res.data)
