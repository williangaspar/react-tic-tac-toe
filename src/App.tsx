import * as React from 'react';
import './App.css';
import Grid from './components/Grid';
import Score from './components/Score';
import Game, { Player, CPU, IGame, IVictory } from 'tic_tac_toe';

class App extends React.Component {
  public state: any;
  private game: IGame;
  private player1: Player;
  private player2: Player;
  private cpu: CPU;
  private grid: Grid;

  constructor() {
    super();
    this.game = Game();
    this.player1 = new Player('Player', 0, true);
    this.player2 = new Player('CPU', 1, false);
    this.cpu = new CPU(1, this.game.getGrid());
    this.game.onGameOver(this.onGameOver);
    this.game.start(this.player1, this.player2);

    this.state = { turn: 'X', locked: false, isOver: false, message: '\u00A0' };
  }

  onGameOver = (victory: IVictory) => {
    this.setState({ locked: true, isOver: true });

    if (victory) {
      const message = victory.winner.name + ' win!!!';
      this.setState({ message: message });

      if (victory.winner.play === this.player1.play) {
        this.player1.score += 1;
      } else {
        this.player2.score += 1;
      }

      const line = [victory.line.first, victory.line.second, victory.line.third];
      this.grid.onGameOver(line);
    } else {
      this.setState({ message: 'It\'s a tie!' });
    }

  }

  onCellClick = (coordenates: number[]) => {
    if (!(this.state.locked || this.state.isOver)) {
      const success = this.game.play(coordenates[0], coordenates[1]);
      if (success) {
        const turn = this.game.getTurn() === this.player1.play ? 'X' : 'O';
        this.setState({ turn, locked: true });
        this.cpuPlay();
      }
    }
  }

  cpuPlay = () => {
    const scope = this;
    setTimeout(doPlay, 1000);

    function doPlay() {
      const play = scope.cpu.play();
      if (play && !scope.state.isOver) {
        scope.grid.onCpuPlay(play);
        scope.setState({ turn: 'X', locked: false });
        scope.game.play(play[0], play[1]);
      }
    }
  }

  onReset = () => {
    this.game.start(this.player1, this.player2);
    this.setState({ turn: 'X', locked: false, isOver: false, message: '\u00A0' });
    this.grid.onReset();
  }

  render() {
    return (
      <div className="App">
        <div className="AppHeader" >Tic-Tac-Toe with React and TypeScript </div>
        <div className="AppContent">
          <Score player1={this.player1} player2={this.player2} />
          <br /><br />
          <Grid
            ref={(c) => { if (c) { this.grid = c; } }}
            turn={this.state.turn}
            locked={this.state.locked}
            onCellClick={this.onCellClick}
          />
          <p><i>{this.state.message}</i></p>
          {this.state.isOver ? <a onClick={this.onReset}>New Game</a> : null}
        </div>
      </div>
    );
  }
}

export default App;
