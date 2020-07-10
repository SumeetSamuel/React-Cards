import React, { Component } from 'react';
import Card from './CardUI';

import img1 from '../assets/technology-gaming-technology-preview.jpg'
import img2 from '../assets/reading-1437841_640.jpg'
import img3 from '../assets/hiker-standing-woman-top-journey-adventure-backpack-hiking-mountain.jpg'

class Cardss extends Component {
    
    render(){
        return(
          <div className='container-fluid d-flex justify-content-center'>
              <div className='row'>
                  <div className='col-md-4'>
                    <Card imgsrc={img1} title='Console'/>
                  </div>
                  <div className='col-md-4'>
                    <Card imgsrc={img2}  title='Reading'/>
                  </div>
                  <div className='col-md-4' >
                    <Card imgsrc={img3} title='Adventure' />
                  </div>
              </div>
          </div>
        
        
        );
    }
}

export default Cardss;