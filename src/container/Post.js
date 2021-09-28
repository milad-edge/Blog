import React from 'react'
import * as actionCreator from '../store/actionCreator'
import FormPost from '../components/FormPost'
import { useSelector, useDispatch } from 'react-redux'
import { Row , Col, Card, Layout } from 'antd';


function Post() {
    const dispatch = useDispatch();
    const postData = useSelector(state => state.post)

    const viewPost = postData && (
        <Card title={postData.title} type="inner" hoverable>
            {postData.body}
        </Card>
    )

    return (
        <Layout.Content style={{margin: '30px 0 162px '}}>
            <Row justify="space-around" align="middle">
                <Col span={12} >
                    <div style={{margin: "10px 0"}}>
                        <Card>
                        <FormPost clicked={(title, body) => dispatch(actionCreator.addPost({posts: {title: title, body: body , userId: 1}}))}/>
                        </Card>
                        {viewPost}
                    </div>
                </Col>
            </Row>
        </Layout.Content>
    )
}


export default Post;