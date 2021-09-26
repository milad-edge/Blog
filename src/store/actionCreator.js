import * as actionType from './actions';

export const addPost = ({posts}) => {
    return {
        type: actionType.ADD_POST,
        payload: {posts}
    }
}

export const updatePost = ({id})=> {
    return {
        type: actionType.UPDATE_POST,
        payload: {id}
    }
}

export const deletePost = ({id})=> {
    return {
        type: actionType.DELETE_POST,
        payload: {id}
    }
}

export const viewPost = (posts) => {

    return {
        type: actionType.VIEW_POST,
        payload: posts
    }
}

export const viewPostRequest = () => {
    return {
        type: actionType.VIEW_POST_REQUEST
    }
}

export const viewUpdatePost = (posts) => {
    return {
        type: actionType.VIEW_UPDATE_POST,
        payload: posts
    }
}

export const viewSinglePost = (post) => {
    return {
        type: actionType.VIEW_SINGLE_POST,
        payload: post
    }
}

export const viewSinglePostRequest = ({id}) => {
    return {
        type: actionType.VIEW_SINGLE_POST_REQUEST,
        id
    }
}

export const getPhoto = (photo) => {

    return {
        type: actionType.GET_PHOTO,
        payload: photo
    }
}

export const getPhotoRequest = () => {
    return {
        type: actionType.GET_PHOTO_REQUEST
    }
}