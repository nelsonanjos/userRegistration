import React from 'react';
import { shallow } from 'enzyme';
import AddUser from '../src/pages/users/add/index'

describe('Testing Add Component', () => {
    it('render correctly AddUser', () => {
        const wrapper = shallow(
            <AddUser />
        );
        expect(wrapper.debug()).toMatchSnapshot();
    })
})