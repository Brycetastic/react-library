import React from 'react';
import { shallow } from 'enzyme';
import { TextInput } from '../Input';

describe('failure message', () => {
    it('should display a failureMessage with error or warning', () => {
        const failureMessage = 'Please enter your name';
        const warning = shallow(
            <TextInput
                placeholder="Name"
                name="name"
                warning
                failureMessage={failureMessage}
            />
        );
        const error = shallow(
            <TextInput
                placeholder="Name"
                name="name"
                error
                failureMessage={failureMessage}
            />
        );

        expect(warning.contains(failureMessage)).toBeDefined();
        expect(error.contains(failureMessage)).toBeDefined();
    });
    it('should not display failureMessage non warning / error', () => {
        const failureMessage = 'Please enter your name';
        const success = shallow(
            <TextInput
                placeholder="Name"
                success
                failureMessage={failureMessage}
            />
        );
        const nil = shallow(
            <TextInput placeholder="Name" failureMessage={failureMessage} />
        );

        expect(success.contains(failureMessage)).toEqual(false);
        expect(nil.contains(failureMessage)).toEqual(false);
    });
});
