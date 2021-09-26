import { call, put, all, takeEvery } from 'redux-saga/effects'
import * as Api from './api'
import * as actionCreator from './actionCreator'
import * as actions from './actions'

function* fetchPost() {
    const posts = yield call(Api.getData, 'posts')
    yield put(actionCreator.viewPost(posts))
}

function* fetchSinglePost(action) {
    const post = yield call(Api.getData, `posts/${action.id}`)
    yield put(actionCreator.viewSinglePost(post))
}

function* createPost(action) {
    const postData = {
        userId: action.payload.posts.userId,
        title: action.payload.posts.title,
        body: action.payload.posts.body
    }

    const posts = yield call(Api.postData, 'posts', postData)
    yield put(actionCreator.viewUpdatePost(posts))
}

function* getPhoto() {
    const photos = yield call(Api.getPhoto)
    yield put(actionCreator.getPhoto(photos))
}

function* watchFetchPost() {
    yield takeEvery(actions.VIEW_POST_REQUEST, fetchPost)
} 

function* whatchCreatePost() {
    yield takeEvery(actions.ADD_POST, createPost)
}

function* whatchGetPhoto() {
    yield takeEvery(actions.GET_PHOTO_REQUEST, getPhoto)
}

function* whatchFetchSinglePost() {
    yield takeEvery(actions.VIEW_SINGLE_POST_REQUEST, fetchSinglePost)    
}

export default function* rootSaga() {
    yield all([whatchGetPhoto(), watchFetchPost(), whatchCreatePost(), whatchFetchSinglePost()])
}
