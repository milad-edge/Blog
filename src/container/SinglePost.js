import React , {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import TopBarProgress from 'react-topbar-progress-indicator'
import * as actionCreator from '../store/actionCreator'
import { Row , Card, Col, Divider, Space, Layout} from 'antd'
import { ClockCircleOutlined, UserOutlined } from '@ant-design/icons'

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
        <Layout.Content style={{margin: '20px 20px 152px'}}>
            <Row>
                <Col span={24}>
                {
                    postData.single && (

                    <Card>
                            <Space direction="vertical">
                            ‍    <h1>{postData.single.title}</h1>
                                <Space split>
                                    <Space>
                                        <ClockCircleOutlined style={{fontSize: '20px'}}/>
                                        <span>25/11/2021</span>
                                    </Space>

                                    <Space>
                                        <UserOutlined style={{fontSize: '20px'}}/>
                                        <span>Milad Hamedi</span>
                                    </Space>
                                </Space>
                            </Space>
                            <Divider />
                            <p style={{padding: '50px 0'}}>{postData.single.body}</p>
                    </Card>

                    )
                }
                </Col>
            </Row>
        </Layout.Content>  
    )
}

export default SinglePost;