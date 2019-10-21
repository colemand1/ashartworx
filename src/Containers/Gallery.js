import React from 'react';
import NaviBar from '../Components/NaviBar';
import Bottom from '../Components/Bottom';
import Slider from '../Components/Slider';
import Loader from '../Components/Loader';
import {Container, Button, ButtonGroup} from 'react-bootstrap';

class Gallery extends React.Component{
    constructor(props){
        super(props)
        this.state={
            items: 'coverart',
            isLoaded: false,
        }
        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent = e =>{
        return(
            this.setState({ 
                items: e.target.value
            })
            // console.log(e.target)
        );
    }

    componentDidMount(){
        // console.log("Mouted: True  |  State: " + this.state.items);
        this.setState({ isLoaded: true });
    }

    render(){
        if(!this.state.isLoaded){
            return <Loader />
        }else{
            return(
                <div className='gallery-container'>
                        {/* Display the Navigation Bar */}
                        <NaviBar />
                        

                        {/* Image Gallery Picker */}
                        <ButtonGroup type="radio" name="items" defaultValue={this.state.items} className='buttonGroup'>
                            <Button 
                                value='coverarts' 
                                // variant='outline-dark' 
                                onClick={this.handleEvent}
                            > 
                                Cover Art
                            </Button>
                            <Button 
                                value='digitals' 
                                // variant='outline-dark'
                                onClick={this.handleEvent}
                            >
                                Digital Prints
                            </Button>
                            <Button 
                                value='posters' 
                                // variant='outline-dark'
                                onClick={this.handleEvent}
                            >
                                Posters
                            </Button>
                            <Button 
                                value='logos' 
                                // variant='outline-dark'
                                onClick={this.handleEvent}
                            >
                                Tattos/Logos
                            </Button>
                        </ButtonGroup>

                        <div className='txtDisplay'>
                            <h2>{this.state.items}</h2>
                        </div>
                        
                        <Slider items={this.state.items} />

                        <Container fluid className='gallery-about'>
                            <h3>About the gallery...</h3>
                            <hr />
                            <p>
                                The color of my logo is purple and is in the shape of a heart. 
                                We are all fighting a silent battle that has left us scarred.
                                A way to heal those scars is by storytelling whether that's through poetry, music, dance, or visual arts.
                                When creating, it unites the body, mind, and spirit, getting one in tune with themselves and relieving stress. 
                                <strong>&#32;ASHARTS</strong> or <strong>The Purple Heart</strong> is a symbol of honor, understanding, compassion, sensitivity, duty, and Royalty.
                                Whenever I felt I wasn't heard I used my artwork as my voice since I was a child. I encourage others who feel the struggle to express themselves to do the same.
                            </p>
                        </Container>
                        {/* Display the footer */}
                        <Bottom />
                </div>                                
            );
        }
    }
}
export default Gallery;