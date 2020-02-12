import React from 'react';
import PropTypes from 'prop-types';
import Notification from './Notification';
import Default from './Default';
import Loading from './Loading';
import { Portal } from '../';
import styles from './Modal.module.scss';
import classnames from 'classnames';

// TODO: Prevent Parent Scroll in Modal
export default class Modal extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        isOpen: PropTypes.bool,
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        className: PropTypes.string,
        onClose: PropTypes.func,
        appendToID: PropTypes.string,
        type: PropTypes.string // success, info, warning, error, default
    };
    static defaultProps = {
        isOpen: true,
        type: 'default'
    };

    state = {
        isOpen: this.props.isOpen
    };

    componentDidUpdate(prevProps) {
        if (prevProps.isOpen !== this.props.isOpen) {
            if (this.props.isOpen) {
                document.addEventListener('click', this.handleCloseModal, false);
            } else {
                document.removeEventListener('click', this.handleCloseModal, false);
            }

            if (this.state.isOpen !== this.props.isOpen) {
                this.setState({
                    isOpen: this.props.isOpen
                });
            }
        }
    }

    componentWillUnmount() {
        this.props.onClose && this.props.onClose();
        document.removeEventListener('click', this.handleCloseModal, false);
    }

    handleCloseModal = ev => {
        ev.stopPropagation();
        if (
            // Close on overlay or close icon
            ev.target.getAttribute('data-overlay') ||
            ev.target.getAttribute('data-close')
        ) {
            this.setState({
                isOpen: false
            });

            // Run onClose prop if it was passed.
            this.props.onClose && this.props.onClose();
        }
    };

    render() {
        const { appendToID, className } = this.props;
        const isOpen = this.props.isOpen || this.state.isOpen;
        const overlayClassName = classnames(styles.overlay, {
            [styles.appendTo]: appendToID,
            [styles.hide]: !isOpen,
            [className]: className
        });

        return (
            <Portal appendToID={this.props.appendToID}>
                <div className={overlayClassName} tabIndex={0} data-overlay={true}>
                    <ModalType {...this.props} />
                </div>
            </Portal>
        );
    }
}

const ModalType = props => {
    const { type } = props;
    if (type === 'default') {
        return <Default {...props} />;
    } else if (type === 'loading') {
        return <Loading {...props} />;
    } else {
        return <Notification {...props} />;
    }
};
