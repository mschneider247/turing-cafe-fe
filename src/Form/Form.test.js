import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {

  it('Should match the snapshot', () => {
    const wrapper = shallow(<Form />)
    expect(wrapper).toMatchSnapshot();
  })

  it('Should update state when updateFormState is triggered', () => {
    const mockEvent = {
      target : {
        name: 'name',
        value: 'Steve'
      }
    }
    const wrapper = shallow(<Form />)
    wrapper.instance().updateFormState(mockEvent)
    expect(wrapper.state('name')).toEqual('Steve')
  })
})