import * as React from 'react';
import * as enzyme from 'enzyme';
import Score from './Score';
import { Player } from 'tic_tac_toe';

let p1: Player;
let p2: Player;

describe('Score component', () => {
  beforeEach(() => {
    p1 = new Player('P1', 0, true);
    p2 = new Player('P2', 1, false);
  });

  it('display player name', () => {
    p2.score = 2;
    const c = enzyme.shallow(<Score player1={p1} player2={p2} />);
    expect(c.find('.Score').childAt(0).text()).toBe('P1 : 0');
    expect(c.find('.Score').childAt(1).text()).toBe('P2 : 2');
  });
});
