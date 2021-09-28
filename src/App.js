import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Post from './container/Post'
import Photo from './container/Photo'
import Index from './container/Index'
import Nav from './components/Nav'
import SinglePost from './container/SinglePost'
import CustomSwitch from './utility/CustomSwitch'
import 'antd/dist/antd.css';
import './assets/Style/global.css'
import { Layout } from 'antd'

const { Header, Footer, Content} = Layout;


function App() {

    const footerStyle = {

      background: '#096dd9', 
      textAlign: 'center' , 
      padding: '20px 0', 
      color: '#fff',
      position: 'relative',
      clear: 'both'
    }

    return (
      <Router>
        <Layout>
          <Header style={{padding: '0'}}>
            <Nav />
          </Header>
          
            <CustomSwitch>
              <Route exact path="/">
                <Index />
              </Route>
              <Route path="/posts/:id" component={SinglePost} />
              <Route path="/sendPost">
                <Post />
              </Route>
              <Route path="/gallery">
                <Photo />
              </Route>
            </CustomSwitch>

          <Footer style={footerStyle}>
            <span>@Powered by Fake Api</span>
          </Footer>
        </Layout> 
      </Router>
    );
}

export default App;
