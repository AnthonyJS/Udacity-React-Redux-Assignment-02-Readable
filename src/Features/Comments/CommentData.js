import axios from 'axios'
import { Header, ROOT_URL } from '../../data/header'

export const getCommentsByPostId = id =>
    axios.get(`${ROOT_URL}/posts/${id}/comments`, Header).then(res => res.data)

export const updateCommentVote = params =>
    axios.post(`${ROOT_URL}/comments/${params.id}`, params, Header)
