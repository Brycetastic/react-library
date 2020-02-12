DropDown Example:

```js
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

<div>
    <div>
        <DropDown className="spacingBottom" options={options} />
        <DropDown options={options} isMulti />
        <p style={{ marginTop: '30px' }}>
            Learn more about <a href="https://react-select.com/home">React Select here</a>.
        </p>
    </div>
</div>;
```

DropDown Example w/ check boxes:

```js
import React from 'react';

initialState = {
    options: [
        { value: 'chocolate', label: 'Chocolate', isSelected: true },
        { value: 'strawberry', label: 'Strawberry', isSelected: true },
        { value: 'vanilla', label: 'Vanilla', isSelected: false }
    ]
};

clickOption = value => {
    setState({
        options: state.options.map(item =>
            item.value === value ? { ...item, isSelected: !item.isSelected } : item
        )
    });
};

clickAll = isSelected => {
    setState({
        options: state.options.map(item => ({ ...item, isSelected }))
    });
};

<DropDown
    isCheckBox
    options={state.options}
    label="Flavors"
    selectAll="Like all"
    removeAll="Dislike all"
    clickOption={clickOption}
    clickAll={clickAll}
/>;
```
