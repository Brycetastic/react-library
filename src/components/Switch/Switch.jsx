import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Switch.module.scss';
import classnames from 'classnames';

const SwitchWrapper = props => {
    const { on, label, name, small = false, className = '', onToggle, disabled } = props;
    const btnClassName = classnames(className, styles['toggle-btn'], {
        [styles['toggle-btn-on']]: on,
        [styles['toggle-btn-off']]: !on,
        [styles.small]: small,
        [styles.disabled]: disabled
    });

    return (
        <div>
            <input
                className={styles['toggle-input']}
                type="checkbox"
                checked={on}
                name={name}
                onChange={() => {
                    // when change happens
                }}
            />
            <button type="button" className={btnClassName} onClick={e => !disabled && onToggle(e)}>
                {label && !small ? (on ? 'on' : 'off') : null}
            </button>
        </div>
    );
};

SwitchWrapper.propTypes = {
    on: PropTypes.bool,
    label: PropTypes.bool,
    small: PropTypes.bool,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    className: PropTypes.string,
    onToggle: PropTypes.func,
    onClick: PropTypes.func
};

export default class Switch extends Component {
    static propTypes = {
        on: PropTypes.bool,
        onClick: PropTypes.func,
        control: PropTypes.bool
    };

    state = { on: this.props.on };

    toggle = e => {
        if (e) {
            e.stopPropagation();
        }

        this.setState(({ on }) => {
            if (this.props.onClick) {
                this.props.onClick(!on);
            }
            return { on: !on };
        });
    };

    render() {
        return (
            <SwitchWrapper
                {...this.props}
                on={this.props.control ? this.props.on : this.state.on}
                onToggle={this.toggle}
            />
        );
    }
}
