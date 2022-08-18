import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>My Recent Works</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, 
              Material-UI, and Firebase. Have features which allows user for realtime messaging, 
              image sharing as well as supports reactions on messages.'
              label='Chatify'
              path='/'
            />
            <CardItem
              src='images/img-2.jpg'
              text='My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. 
              Supports dark mode and easy to write blogs using markdown.'
              label='Bits-0f-C0de'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace and thus helping in sucide prevention."
              label='Ai For Social Good'
              path='/'
            />
            <CardItem
              src='images/img-4.jpg'
              text="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. 
              The model was successfully able to detect diseased and healthy leaves of 14 unique plants. 
              I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              label='Plant AI'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;