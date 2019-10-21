import React from 'react';
import Main from './Containers/Main';
import Gallery from './Containers/Gallery';
import About from './Containers/About';
// import Home from './containers/Home';
// import About from './containers/About';
// import Portfolio from './containers/Portfolio';
// import Contact from './containers/Contact';
import {Route} from 'react-router';


class Router extends React.Component{
    render(){
        return(
            <div className='container-fluid app-container'>
                <Route path="/" exact component={Main} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/about" component={About} />
            </div>
        );
    }
}

export default Router;