import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Colors.module.scss';
import classnames from 'classnames';

const Colors = props => (
    <div
        className={classnames(styles.colors, {
            [styles.horizontal]: props.horizontal
        })}
    >
        <ul className={styles[props.type]}>
            <li />
            <li />
            <li />
            <li />
            <li />
            {props.type === 'gray' ? (
                <Fragment>
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                </Fragment>
            ) : null}
        </ul>
        <span>{props.type}</span>
    </div>
);

Colors.propTypes = {
    type: PropTypes.string
};

export default Colors;
