import React, { Component } from 'react';
import DropdownArrow from './DropdownArrow';
// import Select, { components } from 'react-select';
import classnames from 'classnames';
import styles from './DropDown.module.scss';
import { Button, Switch } from '../';

export default class CheckBoxSelection extends Component {
    state = {
        show: false
    };

    componentDidUpdate(_, prevState) {
        if (prevState.show !== this.state.show) {
            if (this.state.show) {
                document.addEventListener('click', this.closeMenu, false);
            } else {
                document.removeEventListener('click', this.closeMenu, false);
            }
        }
    }

    onClickControl = () => {
        this.setState({
            show: !this.state.show
        });
    };

    closeMenu = ev => {
        ev.stopPropagation();
        if (!ev.target.getAttribute('data-dropdown')) {
            this.setState({
                show: false
            });
        }
    };

    render() {
        return (
            <section
                className={classnames(styles.checkWrapper, { [this.props.className]: this.props.className })}
                data-dropdown={true}
            >
                <button onClick={this.onClickControl} className={styles.checkControl} data-dropdown={true}>
                    <p className={styles.checkLabel} data-dropdown={true}>
                        {this.props.label || 'Select...'}
                    </p>
                    <DropdownArrow data-dropdown={true} />
                </button>
                <ul
                    className={classnames(styles.checkMenu, { [styles.show]: this.state.show })}
                    data-dropdown={true}
                >
                    {this.props.options.map(item => {
                        return (
                            <li
                                key={`dropdown-${item.value}`}
                                onClick={() => this.props.clickOption(item.value)}
                                data-dropdown={true}
                            >
                                <Switch control on={item.isSelected} small />
                                <label data-dropdown={true}>{item.label}</label>
                            </li>
                        );
                    })}
                    <li className={styles.checkButtons} data-dropdown={true}>
                        <Button
                            title={this.props.selectAll || 'Select All'}
                            btnStyle="tertiary"
                            btnSize="medium"
                            onClick={() => this.props.clickAll(true)}
                            data-dropdown={true}
                        />
                        <Button
                            title={this.props.removeAll || 'Remove All'}
                            btnStyle="tertiary"
                            btnSize="medium"
                            onClick={() => this.props.clickAll(false)}
                            data-dropdown={true}
                        />
                    </li>
                </ul>
            </section>
        );
    }
}
