TextInput Exapmles:

```js
<div className="flexSpaceAround spacingBottom max-500">
    <TextInput placeholder="Default" name="keyword" />
    <TextInput placeholder="Warning" name="keyword" warning />
    <TextInput placeholder="Success" name="keyword" success />
    <TextInput placeholder="Error" name="keyword" error />
    <TextInput placeholder="Disabled" name="keyword" disabled />
</div>
```

TextInput with failureMessage:

```js
<div className="flexSpaceAround spacingBottom max-500">
    <TextInput
        iconPosition="right"
        placeholder="Name"
        name="name"
        warning
        failureMessage="Please enter your name"
    />
    <TextInput iconPosition="right" placeholder="Name" name="name" error failureMessage="Enter your name!" />
</div>
```

MoneyInput Exapmles:

```js
const { MoneyInput } = require('./Input');

<div className="flexSpaceAround spacingBottom max-500">
    <MoneyInput name="amount" />
    <MoneyInput name="amount" disabled />
    <MoneyInput error />
</div>;
```

TagInput Exapmles:

```js
const { TagInput } = require('./Input');

<div className="flexSpaceAround spacingBottom max-500">
    <TagInput placeholder="Percent" tag="%" />
    <TagInput placeholder="Enter text here" tag="Label" />
    <TagInput placeholder="Percent" tag="%" disabled />
    <TagInput placeholder="Percent error" tag="%" error />
</div>;
```
