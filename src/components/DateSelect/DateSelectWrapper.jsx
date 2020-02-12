import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './DateSelect.module.scss';

const DateSelectWrapper = props => {
    const dateSelectModifiers = classnames(styles.wrapper, styles[props.iconPosition], {
        [styles.success]: props.success,
        [styles.error]: props.error,
        [styles.warning]: props.warning,
        [props.className]: props.className,
        [styles.disabledTag]: props.disabled
    });

    return (
        <div className={styles.dateSelectWrapper} name={props.name}>
            <div className={dateSelectModifiers}>{props.children}</div>
            {props.failureMessage && (props.warning || props.error || props.message) && (
                <p
                    className={classnames(styles.failureMessage, {
                        [styles.successMessage]: props.success,
                        [styles.errorMessage]: props.error,
                        [styles.warningMessage]: props.warning,
                        [styles.message]: props.message
                    })}
                >
                    {props.failureMessage}
                </p>
            )}
        </div>
    );
};

DateSelectWrapper.propTypes = {
    className: PropTypes.string,
    /**
     * Styles box when dateSelect has status
     */
    success: PropTypes.bool,
    error: PropTypes.bool,
    warning: PropTypes.bool,
    /**
     * Message to be displayed on warning and error states
     */
    failureMessage: PropTypes.string
};

export default DateSelectWrapper;
