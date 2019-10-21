import React from 'react';
var links ={
    insta: 'https://www.instagram.com/ashart247_/',
    facebook: 'https://www.facebook.com/nicki.l.walker1',
    twitter: 'https://twitter.com/ashncolee_',
}

function Bottom(){
    return(

        <div className='bottom-container'>
            <a href={links.insta} className='my-icon'><i className="fab fa-instagram icon small-icon"></i></a>
            <a href={links.facebook} className='my-icon'><i className="fab fa-facebook icon small-icon"></i></a>
            <a href={links.twitter} className='my-icon'><i className="fab fa-twitter icon small-icon"></i></a>
            <p>&#169; AshArt 2019</p>
        </div>

    );
}

export default Bottom;