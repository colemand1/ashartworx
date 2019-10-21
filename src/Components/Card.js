import React from 'react';
import {Container, Image} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
var links ={
    insta: 'https://www.instagram.com/ashart247_/',
    facebook: 'https://www.facebook.com/nicki.l.walker1',
    twitter: 'https://twitter.com/ashncolee_',
}


class Card extends React.Component{

    render(){
        return(
            <Container className='card-container'>
                <div className='my-card'>
                    <div className='logo-container'>
                        <Image src='/images/FullSizeRender.jpg' roundedCircle/>
                    </div>
                    <header>
                        <h4>Ashley Nicole. | Designer | Artist</h4>
                    </header>
                    <div className='menu'>
                       <LinkContainer to='/gallery/'>
                           <i className="far fa-images icon"></i>
                       </LinkContainer>
                        <LinkContainer to='/about/'>
                            <i className="far fa-id-card icon"></i>
                        </LinkContainer>

                            <i className="fas fa-cart-arrow-down icon"></i>
                        
                        
                        
                        <br />
                        <a href={links.insta} className='my-icon'><i className="fab fa-instagram icon small-icon"></i></a>
                        <a href={links.facebook} className='my-icon'><i className="fab fa-facebook icon small-icon"></i></a>
                        <a href={links.twitter} className='my-icon'><i className="fab fa-twitter icon small-icon"></i></a>

                    </div>
                </div>
            </Container>
                
            
        );
    }
}

export default Card;