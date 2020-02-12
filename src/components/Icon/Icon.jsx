import React from 'react';
import PropTypes from 'prop-types';
import styles from './Icon.module.scss';
import classnames from 'classnames';
import * as Svg from '../assets/svgs';
import {
    ArrowLeft,
    ArrowRight,
    Calendar,
    CaretDown,
    CaretUp,
    Check,
    CheckLight,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    Close,
    Download,
    DotLoader,
    EllipsisMenu,
    Error,
    Exclamation,
    ExclamationCircle,
    File,
    Filter,
    FilterOutline,
    Info,
    InfoCircle,
    InfoOutline,
    InfoSolid,
    Loader,
    Logo,
    MinusSquare,
    PlusSquare,
    Pen,
    Question,
    Success,
    Upload,
    UserProfile,
    Warning,
    Zoom
} from '../assets/svgs';

export default function Icon(props) {
    switch (props.name) {
        case 'arrowLeft':
            return <ArrowLeft {...props} />;
        case 'arrowRight':
            return <ArrowRight {...props} />;
        case 'calendar':
            return <Calendar {...props} />;
        case 'caretDown':
            return <CaretDown {...props} />;
        case 'caretUp':
            return <CaretUp {...props} />;
        case 'check':
            return <Check {...props} />;
        case 'checkLight':
            return <CheckLight {...props} />;
        case 'chevronDown':
            return <ChevronDown {...props} />;
        case 'chevronLeft':
            return <ChevronLeft {...props} />;
        case 'chevronRight':
            return <ChevronRight {...props} />;
        case 'chevronUp':
            return <ChevronUp {...props} />;
        case 'close':
            return <Close {...props} />;
        case 'download':
            return <Download {...props} />;
        case 'dotLoader':
            return <DotLoader {...props} />;
        case 'ellipsisMenu':
            return <EllipsisMenu {...props} />;
        case 'error':
            return <Error {...props} />;
        case 'exclamation':
            return <Exclamation {...props} />;
        case 'exclamationCircle':
            return <ExclamationCircle {...props} />;
        case 'file':
            return <File {...props} />;
        case 'filter':
            return <Filter {...props} />;
        case 'filterOutline':
            return <FilterOutline {...props} />;
        case 'info':
            return <Info {...props} />;
        case 'infoCircle':
            return <InfoCircle {...props} />;
        case 'infoOutline':
            return <InfoOutline {...props} />;
        case 'infoSolid':
            return <InfoSolid {...props} />;
        case 'loader':
            const iconClassName = classnames({
                [props.className]: props.className,
                [styles.rotate]: props.spin || props.name === 'loader'
            });
            return <Loader {...props} className={iconClassName} />;
        case 'logo':
            return <Logo {...props} />;
        case 'minusSquare':
            return <MinusSquare {...props} />;
        case 'plusSquare':
            return <PlusSquare {...props} />;
        case 'pen':
            return <Pen {...props} />;
        case 'question':
            return <Question {...props} />;
        case 'success':
            return <Success {...props} />;
        case 'upload':
            return <Upload {...props} />;
        case 'userProfile':
            return <UserProfile {...props} />;
        case 'warning':
            return <Warning {...props} />;
        case 'zoom':
            return <Zoom {...props} />;
        default:
            return <img src={Svg[props.name]} alt={props.name} {...props} className={iconClassName} />;
    }
}

Icon.propTypes = {
    className: PropTypes.string,
    spin: PropTypes.bool,
    name: PropTypes.oneOf([
        'arrowLeft',
        'arrowRight',
        'calendar',
        'caretDown',
        'caretUp',
        'check',
        'checkLight',
        'chevronDown',
        'chevronLeft',
        'chevronRight',
        'chevronUp',
        'close',
        'download',
        'dotLoader',
        'ellipsisMenu',
        'error',
        'exclamation',
        'exclamationCircle',
        'file',
        'filter',
        'filterOutline',
        'info',
        'infoCircle',
        'infoOutline',
        'infoSolid',
        'loader',
        'logo',
        'minusSquare',
        'plusSquare',
        'pen',
        'question',
        'success',
        'upload',
        'userProfile',
        'warning',
        'zoom'
    ])
};
