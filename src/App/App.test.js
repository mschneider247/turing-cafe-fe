import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {

  it('Should match the snapshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot();
  })

  it('Should update state when new reservations recieved', () => {
    const wrapper = shallow(<App />);
    const mockReservation = {
      name: 'Jim',
      time: '7',
      date: '08/13',
      guests: 34
    }
    wrapper.instance().addReservation(mockReservation);
    expect(wrapper.state('reservations')).toEqual([mockReservation]);
  })
})

