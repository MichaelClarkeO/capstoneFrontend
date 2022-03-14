import React from 'react';

const PictureCardImage = ({img}) => {
  // {img: "url"}
  return (
    <img
      src={img.PhotoUrl}
      className="card-img-top"
      alt="..."
    />
  );
};

export default PictureCardImage;