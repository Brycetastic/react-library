import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../';
import styles from './ToolTip.module.scss';
import carrot from './Carrot.module.scss';

let appendingTag = null;
// define what tag to append the ToolTips
appendingTag = document.body;

const TipDisplay = props => {
    const boxClass = classnames(styles.toolTip, props.className, styles[props.color], {
        [styles.low]: props.color === 'black',
        [styles.large]: props.color !== 'black',
        [styles.toolTipIn]: props.alignment,
        [styles.toolTipOut]: !props.alignment,
        [styles.hideTipDisplay]: !props.active
    });

    const carrotClass = classnames(carrot[props.alignment[0]], carrot[props.alignment[1]], carrot[props.color], {
        [carrot.horizontal]: props.horizontal,
        [carrot.vertical]: !props.horizontal
    });

    const toolTip = (
        <React.Fragment>
            <div
                onMouseEnter={props.enter}
                onMouseLeave={props.click ? null : props.leave}
                className={boxClass}
                style={props.style}
                ref={props.tipRef}
            >
                {props.carrot && !props.mobileView ? <div className={carrotClass} /> : null}
                {props.title ? <TipTitle {...props} /> : null}

                <div className={styles.tipContent}>{props.tip}</div>
            </div>
            {props.mobileView && props.active ? (
                /* eslint-disable-next-line jsx-a11y/click-events-have-key-events */
                <div onClick={props.closeTip} className={styles.lightBox} />
            ) : null}
        </React.Fragment>
    );

    if (process.env.__SERVER__ !== true && (props.toggleRender || props.active)) {
        return ReactDOM.createPortal(toolTip, appendingTag);
    }

    return null;
};

const TipTitle = ({ closeTip, title, mobileView }) => (
    <div className={styles.tipTitle}>
        {mobileView ? <Icon name="exclamationCircle" /> : null}
        <p>{title}</p>
        <button onClick={closeTip} type="button">
            <Icon name="close" />
        </button>
    </div>
);

TipDisplay.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    // Style object could be anything
    // eslint-disable-next-line react/forbid-prop-types
    style: PropTypes.object,
    alignment: PropTypes.arrayOf(PropTypes.oneOf(['top', 'bottom', 'right', 'center', 'left'])),
    /**
     * tooltip element
     * @type {node}
     */
    tip: PropTypes.node,
    enter: PropTypes.func,
    leave: PropTypes.func,
    closeTip: PropTypes.func,
    carrot: PropTypes.bool,
    click: PropTypes.bool,
    active: PropTypes.bool,
    mobileView: PropTypes.bool,
    /**
     * hide and show with css or add and remove from page
     * @type {bool}
     */
    toggleRender: PropTypes.bool,
    // eslint-disable-next-line react/forbid-prop-types
    tipRef: PropTypes.object,
    title: PropTypes.string
};

TipTitle.propTypes = {
    title: PropTypes.string,
    closeTip: PropTypes.func,
    mobileView: PropTypes.bool
};

TipDisplay.defaultProps = {
    color: 'white',
    carrot: true
};

export default TipDisplay;
