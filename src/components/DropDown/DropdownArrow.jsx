import React from 'react';
import styles from './DropDown.module.scss';
import { Icon } from '../';

export default function DropdownArrow(props) {
    return (
        <div {...props} className={styles.dropdownArrow}>
            <Icon name="caretUp" />
            <Icon name="caretDown" />
        </div>
    );
}
