export const GET_COMMENT = 'GET_COMMENT'
const SET_COMMENT = 'SET_COMMENT'

export const getComment = (newId) => ({
    type: GET_COMMENT,
    newId
})
export const setComment  = (comments) => ({
    type: SET_COMMENT,
    comments
})

const initialState = {
    comments: undefined
}


const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENT:
            const { comments } = action
            return { ...state, comments }
        case GET_COMMENT:
            return state
        default:
            return state
    }
}
export default commentReducer