import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import GameBody from './components/GameBody';
import CharCard from './components/CharCard';
import Footer from './components/Footer';
import characters from './characters.json';
import './App.css';

// randomize characters from json
// ALLIE: GO THROUGH AND RENAME SOME OF THESE TO MAKE IT READABLE FOR OTHERS:
var randomize = function(array) {
  // store the current array length in this variable so we make sure it's not empty
  var currentIndex = array.length;
  // temporaryValue is just a placeholder, as well as randomIndex
  var temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

class App extends Component {
  state = {
    characters,
    banner: 'Click to begin!',
    score: 0,
    topScore: 0,
    selectedChars: []
  };

  componentDidMount = () => {
    randomize(characters);
    console.log(characters);
    this.setState({
      characters: characters
    });
  };

  handleClick = e => {
    // clickedArray is being declared as a copy of the state, which is necessary for line the line below where we change the isClicked attribute to true
    let clickedArray = { ...this.state };
    // if "isClicked" is false (default in json) is true... (keep in mind we're inside our handleClick method...)
    if (!e.isClicked) {
      // changing the card property isClicked to true
      clickedArray.characters[e.id].isClicked = true;
      // console.log(clickedArray.characters[e.id]);
      // console.log('array:' + clickedArray.characters);

      // setState of App to this new array as character cards are clicked
      this.setState(clickedArray);
      this.handleScore();
    } else {
      this.gameReset();
    }
    randomize(characters);
  };

  checkRepeats = e => {
    let { id } = e.target;
    this.setState({
      id: id
    });

    if (this.state.selectedChars.includes(this.state.id)) {
      this.setState({
        banner: 'You guessed wrong!',
        score: 0,
        selectedChars: []
      });
    }
    console.log('checking repeats:' + this.state.selectedChars);
  };

  handleScore = () => {
    // when score reaches 12 call gameReset
    if (this.state.score === 12) {
      this.gameReset();
    } else {
      // else increment score by 1
      this.setState({
        score: this.state.score + 1
      });
    }
  };

  storeTopScore = () => {
    let storeScore = this.state.score;
    let storeTopScore = this.state.topScore;
    if (storeScore > storeTopScore) {
      storeTopScore = storeScore;
    }
  };

  gameReset = () => {
    // empty the score and change banner
    this.setState({
      score: 0,
      banner: 'Game Over!'
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar
          score={this.state.score}
          topScore={this.state.topScore}
          banner={this.state.banner}
          handleScore={this.handleScore}
          storeTopScore={this.storeTopScore}
        />
        <Jumbotron />
        <GameBody>
          {this.state.characters.map(character => (
            <CharCard
              handleClick={this.handleClick}
              id={character.id}
              key={character.name}
              image={character.image}
            />
          ))}
        </GameBody>
        <Footer />
      </div>
    );
  }
}

export default App;
