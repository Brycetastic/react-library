/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../';
import styles from './Button.module.scss';

const Button = props => {
    const { btnStyle, btnSize, className, title, icon, iconSide, ...other } = props;

    const btnClass = classnames(styles.button, {
        [styles.primary]: props.btnStyle === 'primary',
        [styles.secondary]: props.btnStyle === 'secondary',
        [styles.tertiary]: props.btnStyle === 'tertiary',
        [styles.transparent]: props.btnStyle === 'transparent',
        [styles.menu]: props.btnStyle === 'menu',
        [styles.medium]: props.btnSize === 'medium',
        [styles.small]: props.btnSize === 'small',
        [styles.icon]: props.icon,
        [props.className]: props.className
    });

    return (
        <button className={btnClass} {...other}>
            {props.icon ? <BtnIcon {...props} /> : props.title}
        </button>
    );
};

const BtnIcon = ({ iconSide, icon, title }) => (
    <React.Fragment>
        {iconSide === 'left' && <Icon name={icon} />}
        <span>{title}</span>

        {iconSide === 'right' && <Icon name={icon} />}
    </React.Fragment>
);

Button.propTypes = {
    /** Special version of Button */
    btnStyle: PropTypes.oneOf(['primary', 'secondary', 'transparent', 'tertiary', 'menu']),
    /** Large is default */
    btnSize: PropTypes.oneOf(['medium', 'small']),
    className: PropTypes.string,
    /** Button Text */
    title: PropTypes.string,
    /** Click Event method */
    icon: PropTypes.string,
    iconSide: PropTypes.string
};

BtnIcon.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    iconSide: PropTypes.string
};

Button.defaultProps = {
    type: 'button',
    btnStyle: 'primary',
    iconSide: 'left'
};

export default Button;
