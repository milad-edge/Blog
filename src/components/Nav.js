import React, {useState} from 'react'
import { Menu } from 'antd'
import { HomeOutlined, SendOutlined, PictureOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom'

function Nav() {
    const [selectedKey, setSelectedKey] = useState('home');

    const handleClick = e => {
        setSelectedKey(e.key)
    }

    return (
        <Menu onClick={handleClick} selectedKeys={selectedKey} mode="horizontal">
            <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
            </Menu.Item>

            <Menu.Item key="sendpost" icon={<SendOutlined />}>
                <Link to="/sendPost">Send Post</Link>
            </Menu.Item>

            <Menu.Item key="photos" icon={<PictureOutlined />}>
                <Link to="/gallery">Gallery</Link>
            </Menu.Item>
        </Menu>
        )
}

export default Nav