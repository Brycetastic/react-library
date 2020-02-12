import React, { Component } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import classnames from 'classnames';
import styles from './DateSelect.module.scss';
import { Icon } from '../';
import DateSelectWrapper from './DateSelectWrapper';

// TODO: make this mobile friendly
export default class DateSelect extends Component {
    state = {
        date: null,
        focused: null
    };

    render() {
        const {
            error,
            warning,
            success,
            message,
            failureMessage,
            pickerPosition = 'right',
            small,
            ...other
        } = this.props;
        return (
            <DateSelectWrapper
                className={classnames(`${pickerPosition}_picker`, {
                    smallDate: small
                })}
                {...this.props}
                name={other.name}
            >
                <SingleDatePicker
                    date={this.state.date}
                    onDateChange={date => this.setState({ date })}
                    small
                    noBorder
                    verticalSpacing={0}
                    navPrev={<NavPrev />}
                    navNext={<NavNext />}
                    focused={this.state.focused}
                    onFocusChange={({ focused }) => this.setState({ focused })}
                    {...other}
                    id={this.props.id || 'date_input'}
                    numberOfMonths={1}
                    customInputIcon={small ? null : <Icon name="calendar" className={styles.calendarIcon} />}
                />
            </DateSelectWrapper>
        );
    }
}

function NavPrev() {
    return (
        <button className={styles.monthNav}>
            <Icon name="arrowLeft" />
        </button>
    );
}

function NavNext() {
    return (
        <button className={styles.monthNav} style={{ right: '0' }}>
            <Icon name="arrowRight" />
        </button>
    );
}
