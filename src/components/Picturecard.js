import React from 'react';
import PictureCardBody from './PictureCardBody';
import PictureCardImage from './PictureCardImage';

const PictureCard = (props) => {
    console.log(PictureCard)
  return (
    <div className="card" style={{ width: '18rem' }}>
       <PictureCardImage img={props.PhotoUrl}/> 
       title here is a prop 
       <PictureCardBody 
         {...props}
         title={props.title}
         text={props.text}
         url={props.url}
        />
    </div>
  );
};


export default PictureCard;