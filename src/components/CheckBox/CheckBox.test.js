import React from 'react';
import { shallow } from 'enzyme';
import CheckBox from './CheckBox';

it('CheckBox renders without crashing', () => {
    shallow(<CheckBox />);
});
