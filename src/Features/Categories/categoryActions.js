import { getCategories } from './categoryData'

export const GET_CATEGORIES = 'GET_CATEGORIES'

export const GetCategories = () => dispatch =>
    getCategories().then(data => {
        dispatch({
            type: GET_CATEGORIES,
            payload: data
        })
    })
