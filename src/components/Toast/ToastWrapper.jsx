import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Portal, Toast } from '../';
import styles from './Toast.module.scss';

class ToastWrapper extends Component {
    static propTypes = {
        appendToID: PropTypes.string,
        toastObj: PropTypes.object
    };

    state = {
        toastArray: []
    };

    componentDidUpdate(prevProps) {
        const { toastObj } = this.props;

        if (prevProps.toastObj !== toastObj) {
            this.setState(({ toastArray }) => ({
                toastArray: [
                    ...toastArray.filter(item => {
                        if (item.key === toastObj.key) {
                            clearTimeout(item.timer);
                            return false;
                        }
                        return true;
                    }),
                    {
                        ...toastObj,
                        timer: this.autoClose(toastObj)
                    }
                ]
            }));
        }
    }

    autoClose = toastObj => {
        return setTimeout(() => {
            this.onClose(toastObj);
        }, 4000);
    };

    onClose = toastObj => {
        this.setState(({ toastArray }) => ({
            toastArray: toastArray.filter(item => item.key !== toastObj.key)
        }));
    };

    onHover = toastObj => {
        this.setState(({ toastArray }) => ({
            toastArray: toastArray.map(item =>
                item.key === toastObj.key ? { ...item, timer: clearTimeout(item.timer) } : item
            )
        }));
    };

    onBlur = toastObj => {
        this.setState(({ toastArray }) => ({
            toastArray: toastArray.map(item =>
                item.key === toastObj.key ? { ...item, timer: this.autoClose(item) } : item
            )
        }));
    };

    render() {
        const { appendToID } = this.props;
        const { toastArray } = this.state;

        return (
            <Portal appendToID={appendToID}>
                <TransitionGroup component="div" className={styles.toastWrapper}>
                    {toastArray.map(item => (
                        <CSSTransition timeout={500} classNames="toastBox" key={item.key}>
                            <div className={styles.toastBox}>
                                <Toast
                                    onClose={() => this.onClose(item)}
                                    onHover={() => this.onHover(item)}
                                    onBlur={() => this.onBlur(item)}
                                    isOpen={item.animate === 'in'}
                                    {...item}
                                />
                            </div>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </Portal>
        );
    }
}

export default ToastWrapper;
