import React from 'react';
import PropTypes from 'prop-types';
import styles from './ToolTip.module.scss';
import classnames from 'classnames';

const TargetDisplay = ({
    enterTarget,
    leaveTarget,
    clickTarget,
    children,
    click,
    targetRef,
    targetPointer
}) => (
    <button
        type="button"
        onMouseEnter={enterTarget}
        onMouseLeave={click ? null : leaveTarget}
        onClick={clickTarget}
        className={classnames(styles.target, {
            [styles.noPointer]: !targetPointer
        })}
        ref={targetRef}
    >
        {children}
    </button>
);

TargetDisplay.defaultProps = {
    targetPointer: true
};

TargetDisplay.propTypes = {
    enterTarget: PropTypes.func,
    leaveTarget: PropTypes.func,
    clickTarget: PropTypes.func,
    children: PropTypes.node.isRequired,
    click: PropTypes.bool,
    targetPointer: PropTypes.bool,
    // eslint-disable-next-line react/forbid-prop-types
    targetRef: PropTypes.object
};

export default TargetDisplay;
