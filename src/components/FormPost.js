import React , { useState } from 'react';
import { Form , Input, Button} from 'antd';

function FormPost(props) {
    const [title , setTitle] = useState();
    const [body , setBody] = useState();

    const handleChangeTitle = (e) => {
        let value = e.target.value;
        setTitle(value)
    }

    const handleChangeBody = (e) => {
        let value = e.target.value;
        setBody(value)

    }

    const handleClicked = () => {
        props.clicked(title, body)
        setTitle('');
        setBody('');
    }

    return(

        <Form name="sendPost"  layout="vertical">
            <Form.Item label="Title" name="title">
                <Input placeholder="Enter Your Title" onChange={handleChangeTitle} value={title}/>
            </Form.Item>
 
            <Form.Item label="Text" name="Text">
                <Input.TextArea placeholder="Enter Your Text" onChange={handleChangeBody} value={body}/>
            </Form.Item>

            <Form.Item>
                <Button onClick={handleClicked}>Send</Button>
            </Form.Item>

        </Form>
    )
}

export default FormPost;