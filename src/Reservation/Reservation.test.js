import React from 'react';
import { shallow } from 'enzyme';
import Reservation from './Reservation';

describe('Reservation', () => {

  it('Should match the snapshot', () => {
    const wrapper = shallow(<Reservation />)
    expect(wrapper).toMatchSnapshot();
  })

  it('Should trigger removeReservation when button clicked', () => {
    const removeReservation =  jest.fn();
    const wrapper = shallow(<Reservation removeReservation={removeReservation}/>);
    wrapper.find('button').simulate('click');
    expect(removeReservation).toHaveBeenCalled();
  })
})