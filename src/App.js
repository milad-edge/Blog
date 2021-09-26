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

function App() {
    return (
      <Router> 
        <Nav />
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
      </Router>
    );
}

export default App;
