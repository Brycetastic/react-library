import React from 'react';
import { shallow } from 'enzyme';
import Switch from './Switch';

it('Switch renders without crashing', () => {
    shallow(<Switch />);
});
