import React from 'react';

const imageStyle = {
  maxHeight: '150px',
  objectFit: 'cover',
  objectPosition: '0 0'
};

const Image = props => {
  return (
    <div>
      <img
        className="card-img"
        alt={props.name}
        src={props.image}
        data-clicked={props.isClicked}
        style={imageStyle}
      />
    </div>
  );
};

export default Image;
