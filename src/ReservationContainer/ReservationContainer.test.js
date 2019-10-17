import React from 'react';
import { shallow } from 'enzyme';
import ReservationContainer from './ReservationContainer';

describe('Form', () => {

  it('Should match the snapshot', () => {
    const mockReservations = [{id: 1, name: 'steve'}, {id: 2, name: 'bob'}, {id: 3, name: 'nancy'}]
    const wrapper = shallow(<ReservationContainer reservations={mockReservations}/>)
    expect(wrapper).toMatchSnapshot();
  })
})