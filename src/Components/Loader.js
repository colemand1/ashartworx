import React from 'react';
import {Spinner} from 'react-bootstrap';


class Loader extends React.Component{

    render(){
        return(
            <div className='spinner-wrapper'>
                <Spinner animation="grow" variant="dark" className='my-spinner'/>
            </div>

        ); 
    }
}

export default Loader;