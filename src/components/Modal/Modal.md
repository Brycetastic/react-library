Modal Example:

```jsx
import React from 'react';
import { Button, Modal } from '../';

initialState = {
    isOpen1: false,
    isOpenLoading: false,
    isOpenSuccess: false,
    isOpenInfo: false,
    isOpenWarning: false,
    isOpenError: false
};
toggleFirstModal = () => {
    setState(({ isOpen1 }) => ({
        isOpen1: !isOpen1
    }));
};

toggleLoadingModal = () => {
    setState(({ isOpenLoading }) => ({
        isOpenLoading: !isOpenLoading
    }));
};

toggleSuccessModal = () => {
    setState(({ isOpenSuccess }) => ({
        isOpenSuccess: !isOpenSuccess
    }));
};

toggleInfoModal = () => {
    setState(({ isOpenInfo }) => ({
        isOpenInfo: !isOpenInfo
    }));
};

toggleWarningModal = () => {
    setState(({ isOpenWarning }) => ({
        isOpenWarning: !isOpenWarning
    }));
};

toggleErrorModal = () => {
    setState(({ isOpenError }) => ({
        isOpenError: !isOpenError
    }));
};

<div className="flexSpaceBetween spacingBottom" id="modalContainer">
    <Button title="Open Default" onClick={toggleFirstModal} />
    <Modal title="This is a Great Title" onClose={toggleFirstModal} isOpen={state.isOpen1}>
        <p>This is my First Modal</p>
    </Modal>
    <Button title="Start Loading" onClick={toggleLoadingModal} />
    <Modal
        title="Please wait while this loads"
        type="loading"
        onClose={toggleLoadingModal}
        isOpen={state.isOpenLoading}
    />
    <Button title="Open Success Notification" onClick={toggleSuccessModal} />
    <Modal type="success" onClose={toggleSuccessModal} isOpen={state.isOpenSuccess}>
        <p>This was a success!</p>
    </Modal>
    <Button title="Open Info Notification" onClick={toggleInfoModal} />
    <Modal type="info" onClose={toggleInfoModal} isOpen={state.isOpenInfo}>
        <p>
            A phenomenon called the Wind Chill factor makes us feel colder in winter than the air temperature
            really is. This is due to the interaction of air temperature and wind on the human body that is
            already giving off heat. Both temperature and wind cause heat loss from body surfaces.
        </p>
    </Modal>
    <Button title="Open Warning Notification" onClick={toggleWarningModal} />
    <Modal type="warning" onClose={toggleWarningModal} isOpen={state.isOpenWarning}>
        <p>
            "A Warning to the Curious" is a ghost story by British writer M. R. James, included in his book A
            Warning to the Curious and Other Ghost Stories first published in 1925.
        </p>
    </Modal>
    <Button title="Open Error Notification" onClick={toggleErrorModal} />
    <Modal type="error" onClose={toggleErrorModal} isOpen={state.isOpenError}>
        <p>This was NOT a success!</p>
    </Modal>
</div>;
```
