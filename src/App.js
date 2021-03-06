import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import GameBody from './components/GameBody';
import CharCard from './components/CharCard';
import Footer from './components/Footer';
import characters from './characters.json';
import './App.css';

// randomize characters from json
// ALLIE: THIS WAS ONE WAY...LOL... SEE MY ONE LINE OF CODE BELOW TO REPLACE ALL OF THIS!:
// var randomize = function(array) {
//   // store the current array length in this variable so we make sure it's not empty
//   let arrayLength = array.length;
//   // temporaryValue and randomIndex are just a placeholders
//   let temporaryValue, randomIndex;

//   // While the array has items still in it... (randomize)
//   while (0 !== arrayLength) {
//     // Pick a random element...
//     randomIndex = Math.floor(Math.random() * arrayLength);
//     arrayLength -= 1;

//     // And swap it with the current element.
//     temporaryValue = array[arrayLength];
//     array[arrayLength] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//   return array;
// };

class App extends Component {
  state = {
    characters,
    banner: 'Click to begin!',
    score: 0,
    topScore: 0,
    selectedChars: []
  };

  // NO LONGER NEED THIS SINCE I WANT TO RANDOMIZE IN
  // componentDidMount = () => {
  //   randomize(characters);
  //   // console.log(characters);
  //   this.setState({
  //     characters: characters
  //   });
  // };

  handleClick = id => {
    //var score = this.state.score;
    // Notes for myself to remind myself how I figured these functions out:
    // https://www.w3schools.com/js/js_array_iteration.asp
    // I'm passing random m and n into the find method on my array of characters... then arrow function to...
    this.state.characters.find((m, n) => {
      // if the id's match up (with clicked item and item in array)... just making sure they connect to each other because I had this issue with working with Devin Saturday
      if (m.id === id) {
        // then if THAT clicked character's isClicked property is false...
        if (characters[n].isClicked === false) {
          // change it to true (since it has now been clicked)
          characters[n].isClicked = true;
          //this.handleScore();
          // *************************************
          // increase the score (and state... see variable above) by 1
          var score = this.state.score;
          score++;
          // set the state and change banner
          this.setState({
            score: score,
            banner: 'Keep Guessing!'
          });
          // *************************************
          // DRAMATICALLY improved my random sorting method with google help. I found the sort method also on the w3 schools but at this link: https://www.w3schools.com/js/js_array_sort.asp and played with it in a console.log to get what I needed here
          this.state.characters.sort(() => Math.random() - 0.5);
          return true;
          // else (aka if isClicked WAS true and thus a repeat click --> no more need for my checkRepeat method)
        } else {
          // call this method... see below
          this.gameReset();
        }
      }
    });
  };

  // ALLIE: YOU CAN TRY TO KEEP WORKING ON THIS LATER...FOR NOW IT'S NOT ACTING NICELY...
  // handleScore = () => {
  //   let score = this.state.score;
  //   let topScore = this.state.topScore;

  //   score++;

  //   // Winning case score = 12
  //   if (score === 12) {
  //     this.setState({
  //       banner: 'You win!',
  //       score: score,
  //       topScore: score
  //     });
  //     // if they beat their highest score, store topScore and display banner so
  //   } else if (score >= topScore) {
  //     this.setState({
  //       banner: 'Click any card to keep playing!',
  //       topScore: score,
  //       score: score
  //     });
  //   }
  //   console.log(score);
  // };

  gameReset = () => {
    // reset the isClicked value of the character to false to reset all character cards' properties
    this.state.characters.forEach(char => {
      char.isClicked = false;
    });

    //update the topScore if their score is bigger than the current state
    if (this.state.score > this.state.topScore) {
      this.setState({
        score: 0,
        topScore: this.state.score,
        banner: 'Click to play again.'
      });
    }
  };

  render() {
    return (
      <div className="App">
        <NavBar
          score={this.state.score}
          topScore={this.state.topScore}
          banner={this.state.banner}
        />
        <Jumbotron />
        <GameBody>
          {this.state.characters.map(character => (
            <CharCard
              handleClick={this.handleClick}
              id={character.id}
              key={character.name}
              image={character.image}
              isClicked={character.isClicked}
              alt={character.name}
            />
          ))}
        </GameBody>
        <Footer />
      </div>
    );
  }
}

export default App;
