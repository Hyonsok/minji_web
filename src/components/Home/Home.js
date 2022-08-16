import React from "react";
import CardItem from './CardItem';
import "./Home.css";
import sampleImage from '../../img/sample.png'

 

export default function Home() {
  return (
    <div>
      <div className="intro">We are Devs in Vancouver</div>
      
      <div className='cards'>
        <div className="cards__container">
          <div className="cards__wrapper">  
            <ul className='cards__items'>
              <CardItem
                src={sampleImage}
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                label='Somi JEON'
                path='/resume/somijeon'
              />
              <CardItem
                src={sampleImage}
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                label='HyonSok NA'
                path='/resume/hyonsokna'
              />
              <CardItem
                src={sampleImage}
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                label='HyungJoon LEE'
                path='/resume/hyungjoonlee'
              />   
            </ul>    
          </div>
        </div>            
      </div>
    </div>
  );
}

export default Cards;
     </div>
  );
}
