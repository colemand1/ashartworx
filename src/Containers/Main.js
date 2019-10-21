import React from 'react';
import Card from '../Components/Card';

var timer;
class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            images:[
                'https://images.unsplash.com/photo-1524168272322-bf73616d9cb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                'https://images.pexels.com/photos/2466629/pexels-photo-2466629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                'https://images.unsplash.com/photo-1500058616600-a743332abf53?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
            ],
            counter: 0,
            background: ''
        }
        this.changeBackground = this.changeBackground.bind(this);
    }

    changeBackground(){
        if(this.state.counter === (this.state.images.length - 1)){
            this.setState(prevState => ({
                counter: 0
            }));
        }else{
            this.setState(prevState => ({
                counter: prevState.counter + 1
            }));
        }
        
        this.setState(prevState =>({
            background: 'linear-gradient(90deg, rgba(62, 25, 85, 0.8) 26%, rgba(226, 19, 147, 0.39) 100%), url(' + this.state.images[this.state.counter] + ')'
        }));

    }

    componentDidMount(){
        timer = setInterval(this.changeBackground, 6000);
    }

    componentWillUnmount(){
        clearInterval(timer);
    }

    render(){
        return(
            
            <div className="Main" >
                <div className='background' style={{backgroundImage: this.state.background}}></div>

                <Card />

                <div className='main-bottom'>
                    <p>&#169; AshArt 2019 | Design: Derrick Coleman Jr</p>
                </div>

            </div>
        ); 
    }
}

export default Main;