import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../';
import styles from './CheckBox.module.scss';
import classnames from 'classnames';

const BoxWrapper = props => {
    const {
        on,
        light,
        className,
        onToggle,
        semi,
        disabled,
        onClick,
        ...other
    } = props;
    const btnClassName = classnames(className, styles['toggle-btn'], {
        [styles['toggle-btn-on']]: on,
        [styles.light]: light,
        [styles.disabled]: disabled,
        [className]: className
    });

    return (
        <div>
            <input
                onChange={() => {
                    // when change happens
                }}
                {...other}
                className={styles['toggle-input']}
                type="checkbox"
                checked={on}
                disabled={disabled}
            />
            <button
                type="button"
                className={btnClassName}
                onClick={e => onToggle(e)}
                disabled={disabled}
            >
                {on ? <Check semi={semi} /> : null}
            </button>
        </div>
    );
};

const Check = ({ semi }) => (semi ? '–' : <Icon name="check" />);

BoxWrapper.propTypes = {
    on: PropTypes.bool,
    semi: PropTypes.bool,
    light: PropTypes.bool,
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    onToggle: PropTypes.func,
    onClick: PropTypes.func
};

export default class CheckBox extends Component {
    static propTypes = {
        on: PropTypes.bool,
        onClick: PropTypes.func
    };

    state = { on: this.props.on };

    toggle = e => {
        e.stopPropagation();
        this.setState(({ on }) => {
            if (this.props.onClick) {
                this.props.onClick(!on);
            }
            return { on: !on };
        });
    };

    render() {
        const on = this.props.on === undefined ? this.state.on : this.props.on;
        return <BoxWrapper {...this.props} on={on} onToggle={this.toggle} />;
    }
}
