import React from 'react';

const gameBodyStyle = {
  height: '650px'
};

const GameBody = props => {
  return (
    <div className="jumbotron jumbotron-fluid bg-white" style={gameBodyStyle}>
      <div className="container">
        <div className="row">{props.children}</div>
      </div>
    </div>
  );
};

export default GameBody;
