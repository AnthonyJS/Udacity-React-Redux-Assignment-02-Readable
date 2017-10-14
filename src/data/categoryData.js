import axios from 'axios'
import { config } from './header'

const ROOT_URL = 'http://localhost:5001/categories/'

export const getCategories = () =>
    axios.get(ROOT_URL, config).then(res => res.data)
