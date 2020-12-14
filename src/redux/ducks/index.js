export const GET_NEWS = 'GET_NEWS'
const SET_NEWS = 'SET_NEWS'
const SET_CURRENT_NEW = 'SET_CURRENT_NEW'

export const getNews = () => ({
    type: GET_NEWS
})
export const setNews = (news) => ({
    type: SET_NEWS,
    news
})

const initialState = {
    news: undefined,
    currentNew: undefined
}

export const setCurrentNew = (currentNew) => ({
    type: SET_CURRENT_NEW,
    currentNew
})

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            const { news } = action
            return { ...state, news }
        case GET_NEWS:
            return state
        case SET_CURRENT_NEW:
            const { currentNew } = action
            return { ...state, currentNew }
        default:
            return state
    }
}
export default newsReducer