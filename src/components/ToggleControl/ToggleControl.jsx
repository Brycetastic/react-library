/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './ToggleControl.module.scss';

export default class ToggleControl extends Component {
    state = {
        active: this.props.default ? this.props.default : this.props.labels[0].value
    };

    onChange = e => {
        if (this.props.onChange) {
            this.props.onChange(e);
        }
        this.setState({
            active: e.target.value
        });
    };

    render() {
        const { className, labels, small, dark, darkBtn, disabled } = this.props;
        const wrapperClass = classnames(styles.wrapper, {
            [styles.small]: small,
            [styles.dark]: dark,
            [styles.darkBtn]: darkBtn,
            [className]: className,
            [styles.disabled]: disabled
        });
        let value = this.props.value ? this.props.value : this.state.active;

        return (
            <section className={wrapperClass}>
                {labels.map(item => (
                    <Btn
                        key={item.value}
                        label={item}
                        isActive={item.value === value}
                        onClick={this.onChange}
                        disabled={disabled}
                    />
                ))}
            </section>
        );
    }
}

const Btn = ({ label, isActive, onClick, disabled }) => {
    const btnClass = classnames(styles.button, {
        [styles.inactive]: !isActive,
        [styles.active]: isActive
    });

    return (
        <button
            onClick={e => onClick(e)}
            className={btnClass}
            type="button"
            value={label.value}
            disabled={disabled}
        >
            {label.name}
        </button>
    );
};

ToggleControl.propTypes = {
    className: PropTypes.string,
    /** Click Event method */
    onChange: PropTypes.func,
    /** value of label to be selected first by default */
    default: PropTypes.string,
    /** if you need this to be a controled component use value rather than default */
    value: PropTypes.string,
    labels: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.node,
            value: PropTypes.string
        })
    ),
    disabled: PropTypes.bool
};

Btn.propTypes = {
    label: PropTypes.shape({
        name: PropTypes.node,
        value: PropTypes.string
    }),
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
};
