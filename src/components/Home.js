import React, { Component } from 'react';
import myimage from "./assets/myimage.webp"
class Home extends Component {
    render() {
        return (
            <div>
             <img className='homeimg' src={myimage} alt='hello'/>
            </div>
        );
    }
}

export default Home;