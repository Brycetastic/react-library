import React from 'react';
import { shallow } from 'enzyme';
import Icon from './Icon';

it('Icon renders without crashing', () => {
    shallow(<Icon />);
});
