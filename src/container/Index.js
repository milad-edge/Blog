import React , {useEffect}from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ViewPost from '../components/ViewPost'
import * as actionCreator from '../store/actionCreator'
import {Row , Col, Space} from 'antd'

function Index() {
    const postsData = useSelector(state => ({
        data: state.posts,
        loading: state.loading
    })) 
    const dispatch = useDispatch();
  
        useEffect(() => {
          dispatch(actionCreator.viewPostRequest());
      }, [dispatch]);
    
    if(postsData.loading) {
        return(<div>data is loading ...</div>)
    }
    
    const viewPost = postsData.data && postsData.data.map((item, index) => {
        return (
                <Col>
                    <div style={{marginTop: '20px'}}>
                        <ViewPost
                                    post={{title: item.title , body: item.body, id:item.id}}
                                    key={index}
                        />
                    </div>
                </Col>
                )
            })

    return (
        <>
            <Row justify="space-around">  
                {viewPost}
            </Row>
  
        </>
    )   
}

export default Index