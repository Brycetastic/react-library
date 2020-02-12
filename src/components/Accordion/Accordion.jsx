/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Accordion.module.scss';
import { Icon } from '../';

class Accordion extends React.Component {
    constructor(props) {
        super();
        this.state = {
            active: props.active
        };

        this.childRef = React.createRef();
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        const childHeight = this.childRef.current.getBoundingClientRect().height;
        this.setState({
            childHeight,
            childStyle: {
                height: this.state.active ? childHeight : 0
            }
        });
    }

    componentDidUpdate(prevProps) {
        const childHeight = this.childRef.current.getBoundingClientRect().height;
        if (childHeight !== this.state.childHeight) {
            this.setState({
                childHeight,
                childStyle: {
                    height: this.state.active ? childHeight : 0
                }
            });
        }
        if (prevProps.active !== this.props.active) {
            this.setState({
                active: this.props.active,
                childStyle: {
                    height: this.props.active ? childHeight : 0
                }
            });
        }
    }

    toggle() {
        this.setState(prevState => ({
            active: !prevState.active,
            childStyle: {
                height: prevState.active ? 0 : this.state.childHeight
            }
        }));
    }

    render() {
        const sectionStyle = classnames(styles.wrapper, this.props.className, {
            [this.props.activeClass]: this.state.active,
            [styles.activeWrapper]: this.state.active,
            [styles.secondary]: this.props.accStyle === 'secondary'
        });
        const childClass = classnames(styles.childClass, {
            [styles.active]: this.state.active,
            [styles.inactive]: !this.state.active
        });

        return (
            <section className={sectionStyle}>
                <a
                    className={styles.title}
                    onClick={this.props.onClick || this.toggle}
                    role="button"
                    tabIndex={0}
                >
                    {this.props.title}
                    <Icon
                        name="chevronDown"
                        className={this.state.active ? styles.arrowUp : styles.arrowDown}
                    />
                </a>
                <div className={childClass} style={this.state.childStyle}>
                    <div ref={this.childRef}>{this.props.children}</div>
                </div>
            </section>
        );
    }
}

Accordion.defaultProps = {
    active: false
};

Accordion.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    /** Anything can go inside this accordion container */
    children: PropTypes.node,
    className: PropTypes.string,
    activeClass: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func
};

export default Accordion;
