export const GET_NEWS = 'GET_NEWS'
const SET_NEWS = 'SET_NEWS'

export const getNews = () => ({
    type: GET_NEWS
})
export const setNews = (news) => ({
    type: SET_NEWS,
    news
})

const initialState = {
    news: undefined
}


const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            const { news } = action
            return { ...state, news }
        case GET_NEWS:
            return state
        default:
            return state
    }
}
export default newsReducer