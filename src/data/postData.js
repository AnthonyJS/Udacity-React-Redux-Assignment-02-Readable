import axios from 'axios'
import { config } from './header'

export const getPosts = () =>
    axios
        .get('http://localhost:5001/posts', config)
        .then(res => res.data)
        .then(data => data.filter(item => !item.deleted))

export const deletePost = id =>
    axios
        .delete('http://localhost:5001/posts/' + id, config)
        .then(res => res.data)

export const addPost = params =>
    axios.post('http://localhost:5001/posts', params, config)
