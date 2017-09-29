import * as React from 'react';
import * as enzyme from 'enzyme';
import Cell from './Cell';

let onClick: Function;

describe('Cell component', () => {

  beforeEach(() => {
    onClick = () => null;
  });

  it('display turn on click', () => {
    const c = enzyme.shallow(<Cell turn={'X'} coordinates={[1, 1]} locked={false} onClick={onClick} />);
    c.find('.Cell').simulate('click');
    expect(c.find('.Cell').text()).toBe('X');
  });

  it('ignore click when locked', () => {
    const c = enzyme.shallow(<Cell turn={'X'} coordinates={[1, 1]} locked={true} onClick={onClick} />);
    c.find('.Cell').simulate('click');
    expect(c.find('.Cell').text()).toBe(' ');
  });

  it('Hold on to value', () => {
    const c = enzyme.shallow(<Cell turn={'X'} coordinates={[1, 1]} locked={false} onClick={onClick} />);
    c.find('.Cell').simulate('click');
    c.setProps({ turn: 'O' });
    c.find('.Cell').simulate('click');
    expect(c.find('.Cell').text()).toBe('X');
  });

  it('call parent on click', (done) => {
    onClick = (coordinates: number[]) => {
      expect(coordinates[0]).toBe(1);
      expect(coordinates[1]).toBe(0);
      done();
    };

    const c = enzyme.shallow(
      <Cell turn={'X'} coordinates={[1, 0]} locked={false} onClick={onClick} />
    );

    c.find('.Cell').simulate('click');
  });

  it('call onLightUp', () => {
    const c: any = enzyme.shallow(<Cell turn={'O'} coordinates={[1, 1]} locked={false} onClick={onClick} />);
    const instance: any = c.instance();
    instance.onLightUp([[1, 1]]);
    expect(c.state().victory).toBe('VictoryCell');
  });

  it('call onCpu', () => {
    const c = enzyme.shallow(<Cell turn={'O'} coordinates={[1, 1]} locked={false} onClick={onClick} />);
    const instance: any = c.instance();
    instance.onCpu();
    expect(c.find('.Cell').text()).toBe('O');
  });

  it('reset cell', () => {
    const c = enzyme.shallow(<Cell turn={'X'} coordinates={[1, 1]} locked={false} onClick={onClick} />);
    const instance: any = c.instance();
    instance.onCpu();
    expect(c.find('.Cell').text()).toBe('X');
    instance.onReset();
    expect(c.find('.Cell').text()).toBe(' ');
  });

});