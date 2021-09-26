import * as actions from './actions'

const initialState = {
    loading: false
}

const reducer = (state = initialState , action) => {
    switch(action.type) {
        case actions.VIEW_POST_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case actions.VIEW_SINGLE_POST_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case actions.VIEW_POST:
            return {
                ...state,
                posts: action.payload.slice(0, 20),
                loading: false
            }
        case actions.VIEW_UPDATE_POST:
            return {
                ...state,
                post: action.payload
            }
        case actions.VIEW_SINGLE_POST:
                return {
                    ...state,
                    single: action.payload,
                    loading: false
                }
        case actions.GET_PHOTO_REQUEST: 
                return {
                    ...state,
                    loading: true
                }
        case actions.GET_PHOTO: 
            return {
                ...state,
                photos: action.payload.slice(0 , 6),
                loading: false
            }
        default:
            return state
    }
}

export default reducer;