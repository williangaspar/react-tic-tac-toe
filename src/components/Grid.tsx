import * as React from 'react';
import './Grid.css';
import Cell from './Cell';

export interface Props {
  turn: string;
  locked: boolean;
  onCellClick: Function;
}

class Grid extends React.Component<Props, object> {
  public cells: Cell[] = [];

  onClick = (coordinates: number[]) => {
    this.props.onCellClick(coordinates);
  }

  onCpuPlay = (data: number[]) => {
    for (let i = 0; i < this.cells.length; i++) {
      const coordinates = this.cells[i].props.coordinates;
      if (coordinates[0] === data[0] && coordinates[1] === data[1]) {
        this.cells[i].onCpu();
      }
    }
  }

  onGameOver = (line: number[][]) => {
    this.cells.forEach((item) => item.onLightUp(line));
  }

  onReset = () => {
    this.cells.forEach((item) => item.onReset());
  }

  createCells = () => {
    const cells = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        cells.push(
          <div key={i + '.' + j}>
            <Cell
              ref={(c) => { if (c) { this.cells.push(c); } }}
              turn={this.props.turn}
              coordinates={[i, j]}
              locked={this.props.locked}
              onClick={this.onClick}
            />
          </div>
        );
      }
    }
    return cells;
  }

  render() {

    return (
      <div className="Grid">
        {this.createCells()}
      </div>
    );
  }
}

export default Grid;