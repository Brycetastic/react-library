import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon, ToolTip } from '../';
import styles from './Timeline.module.scss';

export default class Timeline extends Component {
    state = {
        completedIndex: 0
    };

    componentDidUpdate(prevProps, prevState) {
        const { stepIndex } = this.props;

        if (prevProps.stepIndex !== stepIndex && prevState.completedIndex < stepIndex) {
            this.setState({
                completedIndex: stepIndex
            });
        }
    }

    render() {
        const { stepIndex, isLoading, changeStepIndex, titles, locked, disableStep } = this.props;

        return (
            <ul className={styles.timeline}>
                {titles.map((title, index) => {
                    const isDisabled =
                        index === stepIndex ||
                        isLoading ||
                        disableStep === index ||
                        (locked && this.state.completedIndex < index);
                    return (
                        <li
                            key={title}
                            className={classnames({
                                [styles.disabled]: isLoading,
                                [styles.lockProgression]: locked,
                                [styles.locked]: locked && index > this.state.completedIndex,
                                [styles.unlockedNext]: locked && index < this.state.completedIndex,
                                [styles.stepDisabled]: disableStep === index,
                                [styles.active]: index === stepIndex
                            })}
                            onClick={() => {
                                if (!isDisabled) {
                                    changeStepIndex(index, 'timeline');
                                }
                            }}
                            style={{ width: `${100 / titles.length}%` }}
                        >
                            {this.props[`tip${index}`] && isDisabled ? (
                                <WithToolTip
                                    {...this.props}
                                    {...this.state}
                                    index={index}
                                    tip={this.props[`tip${index}`]}
                                />
                            ) : (
                                <Oval {...this.props} {...this.state} index={index} />
                            )}
                            <span>{title}</span>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

const WithToolTip = ({ tip, ...other }) => {
    return (
        <ToolTip alignment={['top', 'center']} tip={tip} color="black">
            <Oval {...other} />
        </ToolTip>
    );
};

const Oval = ({ locked, index, stepIndex, completedIndex }) => {
    const showCheck = locked && index < completedIndex && stepIndex !== index;
    return <div className={styles.oval}>{showCheck ? <Icon name="check" /> : index + 1}</div>;
};

Timeline.propTypes = {
    stepIndex: PropTypes.number.isRequired,
    changeStepIndex: PropTypes.func,
    isLoading: PropTypes.bool,
    locked: PropTypes.bool,
    titles: PropTypes.arrayOf(PropTypes.string)
};

Timeline.defaultProps = {
    stepIndex: 0,
    locked: true
};
