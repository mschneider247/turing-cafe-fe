import React from 'react';
import { shallow } from 'enzyme';
import Reservation from './Reservation';

describe('Form', () => {

  it('Should match the snapshot', () => {
    const wrapper = shallow(<Reservation />)
    expect(wrapper).toMatchSnapshot();
  })
})