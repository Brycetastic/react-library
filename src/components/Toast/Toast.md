Modal Example:

```jsx
import React, { Fragment } from 'react';
import { Button, ToastWrapper } from '../';

initialState = {
    toastObj: undefined
};

toggleDefaultModal = () => {
    const myObj = {
        children: <p>This is the Default.</p>,
        key: 'Default toast'
    };

    setState({
        toastObj: myObj
    });
};

toggleSuccessModal = () => {
    const myObj = {
        children: <p>This is a Success.</p>,
        type: 'success',
        key: 'success toast'
    };

    setState({
        toastObj: myObj
    });
};

toggleInfoModal = () => {
    const myObj = {
        children: <p>This is Information.</p>,
        type: 'info',
        key: 'info toast'
    };

    setState({
        toastObj: myObj
    });
};

toggleWarningModal = () => {
    const myObj = {
        children: <p>This is a Warning.</p>,
        type: 'warning',
        key: 'warning toast'
    };

    setState({
        toastObj: myObj
    });
};

toggleErrorModal = () => {
    const myObj = {
        children: <p>Something went wrong.</p>,
        type: 'error',
        key: 'error toast'
    };

    setState({
        toastObj: myObj
    });
};

<Fragment>
    <div className="flexSpaceBetween spacingBottom" id="modalContainer">
        <Button title="Default" onClick={toggleDefaultModal} />
        <Button title="Success" onClick={toggleSuccessModal} />
        <Button title="Information" onClick={toggleInfoModal} />
        <Button title="Warning" onClick={toggleWarningModal} />
        <Button title="Error" onClick={toggleErrorModal} />
    </div>

    <ToastWrapper toastObj={state.toastObj} />
</Fragment>;
```
