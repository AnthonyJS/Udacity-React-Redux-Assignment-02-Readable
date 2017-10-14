import axios from 'axios'
import { config } from './header'

const ROOT_URL = 'http://localhost:5001/posts'

export const getPosts = () =>
    axios
        .get(ROOT_URL, config)
        .then(res => res.data)
        .then(data => data.filter(item => !item.deleted))

export const deletePost = id =>
    axios.delete(`${ROOT_URL}/${id}`, config).then(res => res.data)

export const addPost = params => axios.post(ROOT_URL, params, config)

export const updatePost = params =>
    axios.put(`${ROOT_URL}/${params.id}`, params, config)
