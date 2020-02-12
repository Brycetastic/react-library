import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Input.module.scss';

const InputWrapper = props => {
    const inputModifiers = classnames(styles.inputWrapper, styles[props.iconPosition], {
        [styles.success]: props.success,
        [styles.error]: props.error,
        [styles.warning]: props.warning,
        [props.className]: props.className
    });

    return (
        <div name={props.name} className={inputModifiers}>
            {props.children}

            {props.failureMessage && (props.warning || props.error) && (
                <span className={styles.failureMessage} data-warning={props.warning} data-error={props.error}>
                    {props.failureMessage}
                </span>
            )}
        </div>
    );
};

InputWrapper.propTypes = {
    className: PropTypes.string,
    /**
     * Styles box when input has status
     */
    success: PropTypes.bool,
    error: PropTypes.bool,
    warning: PropTypes.bool,
    /**
     * Message to be displayed on warning and error states
     */
    failureMessage: PropTypes.string
};

export default InputWrapper;
