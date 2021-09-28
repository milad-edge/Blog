import React , {useEffect}from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ViewPost from '../components/ViewPost'
import * as actionCreator from '../store/actionCreator'
import {Row , Col, Layout, Carousel } from 'antd'
import TopBarProgress from 'react-topbar-progress-indicator'
import Slider1 from '../assets/slider1.jpg'
import Slider2 from '../assets/slider2.jpg'
import Slider3 from '../assets/slider3.jpg'

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
        return < TopBarProgress />
    }
    
    const viewPost = postsData.data && postsData.data.map((item, index) => {
        return (
                <Col>
                    <div style={{marginBottom: '20px'}}>
                        <ViewPost
                                    post={{title: item.title , body: item.body, id:item.id}}
                                    key={index}
                        />
                    </div>
                </Col>
                )
            })


    return (
        <Layout.Content>
            <Carousel autoplay>
                <div>
                    <div className='sliderStyle' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${Slider1}')`}}>
                        <h1>The best Blog</h1>
                    </div>
                </div>
                <div>
                    <div className='sliderStyle' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${Slider2}')`}}>
                        <h1>Sample Project with React & Redux</h1>
                    </div>
                </div>
                <div>
                    <div className='sliderStyle' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${Slider3}')`}}>
                        <h1>Creative Site</h1>
                    </div>
                </div>
            </Carousel>
            <Layout.Content style={{marginTop: '30px', marginBottom: '10px'}}>
                <Row justify="space-around">  
                    {viewPost}
                </Row>
            </Layout.Content>
        </Layout.Content>  
    )   
}

export default Index