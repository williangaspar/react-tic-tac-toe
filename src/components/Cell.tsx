import * as React from 'react';
import './Cell.css';

export interface Props {
  turn: string;
  coordinates: number[];
  locked: boolean;
  onClick: Function;
}

class Cell extends React.Component<Props, object> {
  public state: any;

  constructor() {
    super();
    this.state = {
      value: 0,
      turn: '',
      victory: ''
    };
  }

  onCpu = () => {
    if (!this.state.value) {
      this.setState({ value: 1, turn: this.props.turn });
    }
  }

  onLightUp = (line: number[][]) => {
    for (let i = 0; i < line.length; i++) {
      if (line[i][0] === this.props.coordinates[0] && line[i][1] === this.props.coordinates[1]) {
        this.setState({ victory: 'VictoryCell' });
      }
    }
  }

  onReset = () => {
    this.setState({ value: 0, victory: '' });
  }

  onClick = () => {
    if (!this.state.value && !this.props.locked) {
      this.setState({ value: 1, turn: this.props.turn });
      this.props.onClick(this.props.coordinates);
    }

    const e: any = new Event('cellClick');
    e.detail = this.props.coordinates;
    document.dispatchEvent(e);
  }

  render() {

    return (
      <div className="CellContainer" >
        <div onClick={this.onClick} className={'Cell ' + this.state.turn + ' ' + this.state.victory}>
          {this.state.value ? this.state.turn : '\u00A0'}
        </div>
      </div >
    );
  }
}

export default Cell;