import React from 'react';
import music_backgnd_faded from '../images/music_backgnd_faded.jpg';

const sectionStyle = {
  width: '100%',
  backgroundImage: `url(${music_backgnd_faded})`,
  color: '#d7f46f'
};

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid" style={sectionStyle}>
      <div className="container">
        <h1 className="display-4 font-weight-bold">Doug Funnie Memory Game!</h1>
        <h3 className="font-weight-bold">
          Click on the images to earn points, but be careful! Don't click on a
          character twice, or your score will be reset! Highest possible score
          is 12.
        </h3>
      </div>
    </div>
  );
};

export default Jumbotron;
