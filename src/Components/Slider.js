import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
var items = [];

class Slider extends React.Component{

    constructor(props){
        super(props);
        this.state={
            gallery: '',
            coverarts: [
                {
                    original: '/images/Coverart-Opti/chapo22.jpg',
                    thumbnail: '/images/Coverart-Opti/chapo22.jpg',
                  },
                  {
                    original: '/images/Coverart-Opti/clientfinalversion2.jpg',
                    thumbnail: '/images/Coverart-Opti/clientfinalversion2.jpg',
                  },
                  {
                    original: '/images/Coverart-Opti/clientsimon24.jpg',
                    thumbnail: '/images/Coverart-Opti/clientsimon24.jpg',
                  },
                  {
                    original: '/images/Coverart-Opti/davidcartoon13.jpg',
                    thumbnail: '/images/Coverart-Opti/davidcartoon13.jpg',
                  },
                  {
                    original: '/images/Coverart-Opti/dj45.jpg',
                    thumbnail: '/images/Coverart-Opti/dj45.jpg',
                  },
                  {
                    original: '/images/Coverart-Opti/jeff27.jpg',
                    thumbnail: '/images/Coverart-Opti/jeff27.jpg',
                  },
                  {
                    original: '/images/Coverart-Opti/santa.jpg',
                    thumbnail: '/images/Coverart-Opti/santa.jpg',
                  },
                  {
                    original: '/images/Coverart-Opti/SomebodySnitched20.jpg',
                    thumbnail: '/images/Coverart-Opti/SomebodySnitched20.jpg',
                  },
                  {
                    original: '/images/Coverart-Opti/tickwanyacoverart7.jpg',
                    thumbnail: '/images/Coverart-Opti/tickwanyacoverart7.jpg',
                  },
            ],
            digitals: [
                {
                    original: '/images/DigitalPrints-Opti/Caged-Bird.jpg',
                    thumbnail: '/images/DigitalPrints-Opti/Caged-Bird.jpg',
                  },
                  {
                    original: '/images/DigitalPrints-Opti/Creations.jpg',
                    thumbnail: '/images/DigitalPrints-Opti/Creations.jpg',
                  },
                  {
                    original: '/images/DigitalPrints-Opti/Flourishing.jpg',
                    thumbnail: '/images/DigitalPrints-Opti/Flourishing.jpg',
                  },
                  {
                    original: '/images/DigitalPrints-Opti/HOLD-STILL.jpg',
                    thumbnail: '/images/DigitalPrints-Opti/HOLD-STILL.jpg',
                  },
                  {
                    original: '/images/DigitalPrints-Opti/Infatuation.jpg',
                    thumbnail: '/images/DigitalPrints-Opti/Infatuation.jpg',
                  },
                  {
                    original: '/images/DigitalPrints-Opti/Mama-Africa.jpg',
                    thumbnail: '/images/DigitalPrints-Opti/Mama-Africa.jpg',
                  },
                  {
                    original: '/images/DigitalPrints-Opti/Royal-Roots.jpg',
                    thumbnail: '/images/DigitalPrints-Opti/Royal-Roots.jpg',
                  },
                  {
                    original: '/images/DigitalPrints-Opti/WAR_RAW.jpg',
                    thumbnail: '/images/DigitalPrints-Opti/WAR_RAW.jpg',
                  }, 
            ],
            posters: [  
                {
                    original: '/images/Posters-Opti/GHERBO.jpg',
                    thumbnail: '/images/Posters-Opti/GHERBO.jpg',
                  },
                  {
                    original: '/images/Posters-Opti/JAYELLIS.jpg',
                    thumbnail: '/images/Posters-Opti/JAYELLIS.jpg',
                  },
                  {
                    original: '/images/Posters-Opti/JHENEAIKO.jpg',
                    thumbnail: '/images/Posters-Opti/JHENEAIKO.jpg',
                  },
                  {
                    original: '/images/Posters-Opti/rihanna1.jpg',
                    thumbnail: '/images/Posters-Opti/rihanna1.jpg',
                  },
                  {
                    original: '/images/Posters-Opti/CHANCE-THE-RAPPER.jpg',
                    thumbnail: '/images/Posters-Opti/CHANCE-THE-RAPPER.jpg',
                  },
                  {
                    original: '/images/Posters-Opti/DAVE-EAST.jpg',
                    thumbnail: '/images/Posters-Opti/DAVE-EAST.jpg',
                  },
                  {
                    original: '/images/Posters-Opti/DEWANDA-WISE.jpg',
                    thumbnail: '/images/Posters-Opti/DEWANDA-WISE.jpg',
                  },
                  {
                    original: '/images/Posters-Opti/I-AM.jpg',
                    thumbnail: '/images/Posters-Opti/I-AM.jpg',
                  },
                  {
                    original: '/images/Posters-Opti/KWEKU.jpg',
                    thumbnail: '/images/Posters-Opti/KWEKU.jpg',
                  },
                  {
                    original: '/images/Posters-Opti/LUPITA.jpg',
                    thumbnail: '/images/Posters-Opti/LUPITA.jpg',
                  },
                  {
                    original: '/images/Posters-Opti/REBELS.jpg',
                    thumbnail: '/images/Posters-Opti/REBELS.jpg',
                  },
                  {
                    original: '/images/Posters-Opti/RIPFREDO.jpg',
                    thumbnail: '/images/Posters-Opti/RIPFREDO.jpg',
                  },
                  {
                    original: '/images/Posters-Opti/TYLER-PERRY.jpg',
                    thumbnail: '/images/Posters-Opti/TYLER-PERRY.jpg',
                  },
            ],
            logos: [
                {
                    original: '/images/Tats-logo-Opti/ulayunits13.jpg',
                    thumbnail: '/images/Tats-logo-Opti/ulayunits13.jpg',
                  },
                  {
                    original: '/images/Tats-logo-Opti/joeltatt10.jpg',
                    thumbnail: '/images/Tats-logo-Opti/joeltatt10.jpg',
                  },
                  {
                    original: '/images/Tats-logo-Opti/alanalogo19.jpg',
                    thumbnail: '/images/Tats-logo-Opti/alanalogo19.jpg',
                  },
                  {
                    original: '/images/Tats-logo-Opti/GIRLSLOGO7.jpg',
                    thumbnail: '/images/Tats-logo-Opti/GIRLSLOGO7.jpg',
                  },
                  {
                    original: '/images/Tats-logo-Opti/alexistatt25.jpg',
                    thumbnail: '/images/Tats-logo-Opti/alexistatt25.jpg',
                  },
                  {
                    original: '/images/Tats-logo-Opti/GOLDLIFE10.jpg',
                    thumbnail: '/images/Tats-logo-Opti/GOLDLIFE10.jpg',
                  },
                  {
                    original: '/images/Tats-logo-Opti/KEY2BE12.jpg',
                    thumbnail: '/images/Tats-logo-Opti/KEY2BE12.jpg',
                  },
                  {
                    original: '/images/Tats-logo-Opti/peekintobeauty7.jpg',
                    thumbnail: '/images/Tats-logo-Opti/peekintobeauty7.jpg',
                  },
                  {
                    original: '/images/Tats-logo-Opti/printaholicscolor8.jpg',
                    thumbnail: '/images/Tats-logo-Opti/printaholicscolor8.jpg',
                  },
                  {
                    original: '/images/Tats-logo-Opti/solidfitness13.jpg',
                    thumbnail: '/images/Tats-logo-Opti/solidfitness13.jpg',
                  },
            ]
        }
        this.setItems = this.setItems.bind(this);
    }

    componentDidMount(){
        this.setState({
           gallery: this.props.items 
        });
    }

    setItems(input){
        if(input === 'digitals'){
            items = this.state.digitals;
        }else if(input === 'posters'){
            items = this.state.posters;
        }else if(input === 'logos'){
            items = this.state.logos;
        }else{
            items = this.state.coverarts;
        }
    }

    render(){
        this.setItems(this.props.items);
        return(
            <div className='container slider'>
                <ImageGallery items={items} thumbnailPosition='left' disableThumbnailScroll = {true} />
            </div>
        );
    }


}
export default Slider;