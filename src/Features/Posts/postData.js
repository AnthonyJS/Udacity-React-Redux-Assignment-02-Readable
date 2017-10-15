import axios from 'axios'
import { Header, ROOT_URL } from '../../data/header'

const getPostsByCategory = category =>
    axios
        .get(`${ROOT_URL}/${category}/posts`, Header)
        .then(res => res.data)
        .then(data => data.filter(item => !item.deleted))

export const getPosts = category => {
    if (category) return getPostsByCategory(category)

    return axios
        .get(`${ROOT_URL}/posts`, Header)
        .then(res => res.data)
        .then(data => data.filter(item => !item.deleted))
}

export const getPostById = id =>
    axios.get(`${ROOT_URL}/posts/${id}`, Header).then(res => res.data)

export const addPost = params => axios.post(`${ROOT_URL}/posts`, params, Header)

export const deletePost = id =>
    axios.delete(`${ROOT_URL}/posts/${id}`, Header).then(res => res.data)

export const updatePost = params =>
    axios.put(`${ROOT_URL}/posts/${params.id}`, params, Header)

export const updatePostVote = params =>
    axios.post(`${ROOT_URL}/posts/${params.id}`, params, Header)
