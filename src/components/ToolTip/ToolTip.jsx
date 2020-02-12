import React from 'react';
import PropTypes from 'prop-types';
import { setPosition, pagePosition, toolTipPosition, isMobile } from './helpers/findLocations';
import TipDisplay from './TipDisplay';
import TargetDisplay from './TargetDisplay';

/**
 * align box top or bottom and left, right, or center
 * with or without carrot
 * target is the child of ToolTip
 * tip is defined in "tip" prop
 * interaction can be on hover or click of target
 * options for color
 *
 * option to diplay:
 * horizontally (left or right)
 * or vertically (top or bottom)
 * from target. default is vertical
 * @author Bryce Marshall
 */

class ToolTip extends React.Component {
    constructor(props) {
        super();

        this.state = {
            toolTipStyle: undefined,
            inToolTip: false,
            vert: props.alignment[0],
            horz: props.alignment[1],
            mobileView: false,
            click: props.click
        };

        this.tipRef = React.createRef();
        this.targetRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidUpdate(_, prevState) {
        if (prevState.active !== this.state.active) {
            if (this.state.active) {
                this.findTipPosition();
                document.addEventListener('click', this.handleClickOutside, true);
                document.addEventListener('scroll', this.onScrolling, true);
            } else if (!this.state.active) {
                document.removeEventListener('scroll', this.onScrolling, true);
                document.removeEventListener('click', this.handleClickOutside, true);
                this.closeTip();
            }
        }
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScrolling, true);
        document.removeEventListener('click', this.handleClickOutside, true);
        this.closeTip();
    }

    // Throttle this scroll function to every 1s
    onScrolling = () => {
        this.setState({
            active: false
        });
    };

    clickTarget = e => {
        e.preventDefault();

        this.setState(
            {
                click: isMobile() || this.props.click
            },
            () => {
                if (this.state.click) {
                    this.setState(prevState => ({
                        active: !prevState.active
                    }));
                }
            }
        );
    };

    closeTip = e => {
        if (e) {
            e.preventDefault();
        }

        this.setState({
            active: false,
            inToolTip: false
        });
    };

    enterTarget = e => {
        e.stopPropagation();

        this.setState(
            {
                click: isMobile() || this.props.click
            },
            () => {
                if (!this.state.click) {
                    this.setState({
                        active: true
                    });
                }
            }
        );
    };

    leaveTarget = () => {
        setTimeout(() => {
            if (this.state.active && !this.state.inToolTip) {
                this.setState({
                    active: false,
                    vert: this.props.alignment[0]
                });
            }
        }, 100);
    };

    enterTip = () => {
        this.setState({
            inToolTip: true
        });
    };
    leaveTip = () => {
        this.setState(
            {
                inToolTip: false
            },
            this.leaveTarget()
        );
    };

    findTipPosition = () => {
        const { alignment, horizontal } = this.props;
        let vert = alignment[0];

        let target = this.targetRef.current.getBoundingClientRect();
        if (target.width === 0) {
            target = this.targetRef.current.children[0].getBoundingClientRect();
        }
        const tip = this.tipRef.current.getBoundingClientRect();

        const page = pagePosition();
        const toolTip = toolTipPosition(tip, target, vert, horizontal);

        // check to see if tool tip can fit in window if not switch alignment
        if (vert !== 'top' && page.bot < toolTip.bot) {
            vert = 'top';
        } else if (vert === 'top' && page.top > toolTip.top) {
            vert = 'bottom';
        }

        this.setState(
            {
                vert,
                mobileView: isMobile()
            },
            () => {
                this.setState(prevState => ({
                    toolTipStyle: setPosition(tip, target, prevState, horizontal)
                }));
            }
        );
    };

    handleClickOutside(event) {
        if ((this.tipRef && !this.tipRef.current.contains(event.target)) || this.props.closeOnClick) {
            setTimeout(() => {
                this.closeTip(event);
            }, 0);
        }
    }

    render() {
        return (
            <React.Fragment>
                <TargetDisplay
                    {...this.props}
                    click={this.state.click}
                    enterTarget={this.enterTarget}
                    leaveTarget={this.leaveTarget}
                    clickTarget={this.clickTarget}
                    targetRef={this.targetRef}
                />
                <TipDisplay
                    {...this.props}
                    click={this.state.click}
                    alignment={[this.state.vert, this.state.horz]}
                    enter={this.enterTip}
                    leave={this.leaveTip}
                    style={this.state.toolTipStyle}
                    tipRef={this.tipRef}
                    closeTip={this.closeTip}
                    active={this.state.active || this.state.inToolTip}
                    mobileView={this.state.mobileView}
                />
            </React.Fragment>
        );
    }
}

ToolTip.propTypes = {
    /**
     * if you want a click interaction rather then a hover
     * @type {bool}
     */
    click: PropTypes.bool,
    /**
     * tool tip to display from target
     * @type {bool}
     */
    horizontal: PropTypes.bool,
    /**
     * toolTip position from taret
     * `alignment={[vertical, horizontal]}`
     * @type {string}
     */
    alignment: PropTypes.arrayOf(PropTypes.oneOf(['top', 'bottom', 'right', 'center', 'left'])),
    closeOnClick: PropTypes.bool
};

ToolTip.defaultProps = {
    alignment: ['bottom', 'center'],
    click: false,
    horizontal: false
};

export default ToolTip;
