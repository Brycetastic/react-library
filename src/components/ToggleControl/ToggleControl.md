ToggleControl Examples:

```js
const labels = [
    {
        name: 'Yesterday',
        value: 'Yesterday'
    },
    {
        name: 'Today',
        value: 'Today'
    },
    {
        name: 'Tomorrow',
        value: 'Tomorrow'
    }
];

<div className="spacingBottom">
    <ToggleControl labels={labels} default="Today" />

    <ToggleControl labels={labels} small />

    <ToggleControl labels={labels} dark default="Tomorrow" />

    <p>Disabled:</p>

    <ToggleControl labels={labels} disabled />

    <ToggleControl labels={labels} dark disabled />
</div>;
```
