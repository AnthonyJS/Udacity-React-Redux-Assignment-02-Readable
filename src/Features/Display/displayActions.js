export const SHOW_CREATE_POST = 'SHOW_CREATE_POST'
export const HIDE_CREATE_POST = 'HIDE_CREATE_POST'

export const ShowCreatePost = dispatch =>
    dispatch({
        type: SHOW_CREATE_POST,
        payload: true
    })

export const HideCreatePost = dispatch =>
    dispatch({
        type: HIDE_CREATE_POST,
        payload: true
    })
