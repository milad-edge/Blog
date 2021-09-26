import React from 'react'
import * as actionCreator from '../store/actionCreator'
import FormPost from '../components/FormPost'
import { useSelector, useDispatch } from 'react-redux'
import ViewPost from '../components/ViewPost'
import { Row , Col, Card } from 'antd';


function Post() {
    const dispatch = useDispatch();
    const postData = useSelector(state => state.post)

    const viewPost = postData && (
        <Card title={postData.title} type="inner" hoverable>
            {postData.body}
        </Card>
    )

    return (
        <Row justify="space-around" align="middle">
                <Col span={12} >
                    <div style={{margin: "10px 0"}}>
                        <FormPost clicked={(title, body) => dispatch(actionCreator.addPost({posts: {title: title, body: body , userId: 1}}))}/>
                        {viewPost}
                    </div>
                </Col>
        </Row>
    )
}


export default Post;