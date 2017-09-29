import * as React from 'react';
import * as enzyme from 'enzyme';
import Grid from './Grid';

let onCellClick: Function;

describe('Grid component', () => {

  beforeEach(() => {
    onCellClick = () => null;
  });

  it('create 9 cells', () => {
    const c = enzyme.shallow(<Grid turn={'X'} locked={false} onCellClick={onCellClick} />);
    expect(c.find('.Grid').children().length).toBe(9);
  });

  it('trigger parent onCellClick', (done) => {
    onCellClick = (coordinates: number[]) => {
      expect(coordinates[0]).toBe(1);
      expect(coordinates[1]).toBe(0);
      done();
    };

    const c = enzyme.shallow(<Grid turn={'X'} locked={false} onCellClick={onCellClick} />);
    const instance: any = c.instance();
    instance.onClick([1, 0]);
  });

});