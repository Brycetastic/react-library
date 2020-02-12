import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Portal extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        appendToID: PropTypes.string
    };
    static defaultProps = {
        appendToID: 'root'
    };

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            document.getElementById(this.props.appendToID) || document.getElementById('rsg-root')
        );
    }
}
