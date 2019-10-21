import React from 'react';
import NaviBar from '../Components/NaviBar';
import Bottom from '../Components/Bottom';
import {Container, Row, Col, Image, Form, Button} from 'react-bootstrap';

class About extends React.Component{
  
    render(){
        return(
            <div className='about wrapper'>
                <NaviBar />
                    <Container className='about-container'>
                        <Row className="align-items-center justify-content-center">
                            <Col sm={12} md={6}>
                                <Image className='profile-pic' src='/images/profile-pic.jpg' roundedCircle />
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                        
                            <Col lg={{span:10}}>
                                <p>
                                    Hey my name is Ashley N. 
                                    I'm a designer and artist from Chicago, IL, based out of Cincinnati, OH. 
                                    I've been working with digital art for the last 4 years, however I've been drawing and painting since I was young.  
                                    I am currently a senior at Xavier Univeristy, and looking to graduate December 2019. 
                                    I love to be active.
                                    My favorite sport and past-time activity is basketball. I love the <strong>Chicago Bulls</strong>.
                                    If I'm not to busy drawing or balling, you can catch me at one of Cincinnati's premire artshows.  
                                    
    
                                </p>
                            </Col>
                        </Row>
                        <Row className='justify-content-center align-items-center'>
                            <Col lg={{span:6}}>
                                <div className='contact-container'>
                                    <h4>Please contact me with any questions!</h4>
                                    <p><strong>Thank you</strong> for stopping by.</p>
                                    <ul>
                                        <li><strong>e-mail: </strong>ashwalk214@gmail.com</li>
                                        <li><strong>instagram: </strong>ashart247_</li>
                                        <li><strong>facebook: </strong>nicki.l.walker1</li>
                                        <li><strong>twitter: </strong>ashncolee_</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                <Bottom />
            </div>
        );
    }
}

export default About;