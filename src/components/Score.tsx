import * as React from 'react';
import './Score.css';
import { Player } from 'tic_tac_toe';

export interface Props {
  player1: Player;
  player2: Player;
}

class Score extends React.Component<Props, object> {

  render() {

    return (
      <div className="ScoreContainer">
        <p>Score</p>
        <div className="Score">
          <div>{this.props.player1.name} : {this.props.player1.score}</div>
          <div>{this.props.player2.name} : {this.props.player2.score}</div>
        </div>
      </div>
    );
  }
}

export default Score;