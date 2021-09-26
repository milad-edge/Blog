import React , {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import TopBarProgress from 'react-topbar-progress-indicator'
import * as actionCreator from '../store/actionCreator'

function SinglePost() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const postData = useSelector(state => ({single: state.single, loading: state.loading}))
    useEffect(()=> {
        dispatch(actionCreator.viewSinglePostRequest({id}))
    }, [dispatch])

    if (postData.loading) {
        return < TopBarProgress />
    }

    return (
        <div>
            { postData.single && (
                <div>
                    <h1>{postData.single.title}</h1>
                    <p>{postData.single.body}</p>
                </div>
            )}
        </div>
    )
}

export default SinglePost;