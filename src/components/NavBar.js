import React from 'react';

const NavBar = props => {
  // console.log(props);
  return (
    <nav className="navbar navbar-expand-sm py-3 font-weight-bold">
      <div className="container">
        <div className="col-lg-4">
          <span className="navbar-brand float-left">
            Doug Funnie Memory Game
          </span>
        </div>
        <div className="col-lg-4">
          <span className="navbar-brand center">{props.banner}</span>
        </div>
        <div className="col-lg-4">
          <span className="navbar-brand float-right">
            Score: {props.score} | Top Score: {props.topScore}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
