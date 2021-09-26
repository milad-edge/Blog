import React , {useEffect}from 'react'
import ViewPhoto from '../components/ViewPhoto'
import { useSelector, useDispatch} from 'react-redux'
import * as actionCreator from '../store/actionCreator'
import {Row, Col, Image} from 'antd'

function Photo() {

    const dispatch = useDispatch();
    const photos = useSelector(state => ({
        loading: state.loading,
        photo: state.photos
    }))
    useEffect(() => {
        dispatch(actionCreator.getPhotoRequest())
    }, [])

    if(photos.loading) {
        return <p>data is loading ...</p>
    }

    return(
        <Row >
            <Image.PreviewGroup>
                {photos.photo && photos.photo.map((item, index) => (
                    <Col span={8}>
                        <ViewPhoto image={item.download_url} key={index} />
                    </Col>
                ))}
            </Image.PreviewGroup>
        </Row>

    )
}

export default Photo;