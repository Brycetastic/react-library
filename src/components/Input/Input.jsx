import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputWrapper from './InputWrapper';
import classnames from 'classnames';
import styles from './Input.module.scss';

const TextInput = props => {
    const { className, success, error, warning, failureMessage, iconPosition, small, ...other } = props;
    return (
        <InputWrapper {...props}>
            <input
                type="text"
                {...other}
                className={classnames(styles.input, {
                    [styles.small]: small
                })}
            />
        </InputWrapper>
    );
};

const TextArea = props => {
    const { className, success, error, warning, failureMessage, iconPosition, small, ...other } = props;
    return (
        <InputWrapper {...props}>
            <textarea
                type="text"
                {...other}
                className={classnames(styles.input, {
                    [styles.small]: small
                })}
            />
        </InputWrapper>
    );
};

const TagInput = props => {
    const { className, success, error, warning, failureMessage, iconPosition, ...other } = props;
    return (
        <InputWrapper {...props}>
            <div
                className={classnames(styles.tagWrapper, styles.rightTag, {
                    [styles.disabledTag]: props.disabled
                })}
            >
                <input type="text" {...other} className={styles.input} />
                <div className={styles.tag}>
                    <p>{props.tag}</p>
                </div>
            </div>
        </InputWrapper>
    );
};

class MoneyInput extends Component {
    state = {
        amount: ''
    };

    onChange = e => {
        if (this.props.onChange) {
            this.props.onChange(e);
        }
        this.setState({ amount: e.target.value });
    };

    render() {
        let amount = this.props.value !== undefined ? this.props.value : this.state.amount;
        const {
            className,
            success,
            error,
            warning,
            failureMessage,
            iconPosition,
            small,
            ...other
        } = this.props;

        return (
            <InputWrapper {...this.props}>
                <div
                    className={classnames(styles.tagWrapper, styles.leftTag, {
                        [styles.small]: small,
                        [styles.disabledTag]: this.props.disabled
                    })}
                >
                    <input
                        type="text"
                        maxLength={12}
                        placeholder="0.00"
                        {...other}
                        className={styles.input}
                        value={amount ? amount : ''}
                        onChange={e => this.onChange(e)}
                    />
                    <div className={styles.tag}>
                        <p>$</p>
                    </div>
                </div>
            </InputWrapper>
        );
    }
}

TagInput.propTypes = {
    tag: PropTypes.node
};

MoneyInput.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export { TextInput, MoneyInput, TagInput, TextArea };
