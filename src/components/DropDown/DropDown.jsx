import React from 'react';
import Select, { components } from 'react-select';
import DropdownArrow from './DropdownArrow';
import CheckBoxSelection from './CheckBoxSelection';
import classnames from 'classnames';
import styles from './DropDown.module.scss';
// import { Icon } from '../';

const gray3 = '#E7E8EA';
const gray4 = '#dadcdf';
const gray5 = '#CED1D5';
const gray6 = '#afb3ba';
const gray10 = '#2f3337';
const blue = '#0485CC';
const blueLight = '#F0F7FA';

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        background: state.isFocused ? gray5 : gray3,
        border: '0',
        'border-radius': '2px',
        'box-shadow': 'none',
        'min-height': '32px'
    }),
    valueContainer: provided => ({
        ...provided,
        color: gray10,
        'font-size': '14px',
        padding: '0 0 0 12px'
    }),
    dropdownIndicator: provided => ({
        ...provided,
        color: gray10,
        padding: '0 16px'
    }),
    indicatorSeparator: () => ({
        display: 'none'
    }),
    menu: provided => ({
        ...provided,
        color: gray10,
        'border-radius': '2px',
        'box-shadow': '0 1px 3px rgba(0, 0, 0, 0.2)'
    }),
    option: (provided, { isDisabled, isSelected }) => ({
        ...provided,
        color: isDisabled ? gray6 : gray10,
        backgroundColor: isDisabled ? null : isSelected ? blueLight : null,
        '&:hover': isDisabled
            ? null
            : {
                  'background-color': blue,
                  color: 'white'
              }
    }),
    multiValue: (styles, { data }) => {
        return {
            ...styles,
            borderLeft: `3px solid ${data.color}`,
            lineHeight: '1.5'
        };
    },
    multiValueLabel: provided => {
        return {
            ...provided,
            flex: 1
        };
    }
};

const lightStyles = {
    control: (provided, state) => ({
        ...provided,
        background: 'white',
        border: '1px solid #dadcdf',
        'border-color': state.isFocused ? blue : gray4,
        'border-radius': '2px',
        'box-shadow': 'none',
        'min-height': '40px'
    }),
    multiValue: (styles, { data }) => {
        return {
            ...styles,
            borderLeft: `3px solid ${data.color}`,
            lineHeight: '1.5'
        };
    }
};

const hideDropdownIndicator = {
    dropdownIndicator: () => ({
        display: 'none'
    })
};

// found this solution here https://github.com/JedWatson/react-select/issues/685
const DropdownIndicator = props => {
    return (
        components.DropdownIndicator && (
            <components.DropdownIndicator {...props}>
                <DropdownArrow />
            </components.DropdownIndicator>
        )
    );
};

export default function DropDown(props) {
    const { className, hideDropdown, multiValueSize, isCheckBox, ...other } = props;
    if (isCheckBox) {
        return <CheckBoxSelection {...props} />;
    }
    return (
        <Select
            components={other.isMulti ? null : { DropdownIndicator }}
            styles={{
                ...customStyles,
                ...(other.isMulti && lightStyles),
                ...(hideDropdown && hideDropdownIndicator),
                ...(multiValueSize && {
                    multiValue: (provided, { data }) => ({
                        ...provided,
                        borderLeft: `3px solid ${data.color || gray3}`,
                        lineHeight: '1.5',
                        width: `calc(${multiValueSize}% - 8px)` || 'initial'
                    })
                })
            }}
            className={classnames(styles.wrapper, className, {
                [styles.light]: other.isMulti
            })}
            classNamePrefix="dropDown"
            {...other}
        />
    );
}
