Timeline Example:

```jsx
import React from 'react';
import { Timeline } from './';

initialState = {
    titles: ['Info', 'Payment', 'Review', 'Confirm'],
    stepIndex: 0
};

changeStepIndex = index => {
    setState({
        stepIndex: index
    });
};

next = () => {
    if (state.stepIndex <= state.titles.length - 1) {
        setState(({ stepIndex }) => ({
            stepIndex: stepIndex + 1
        }));
    }
};

back = () => {
    if (state.stepIndex > 0) {
        setState(({ stepIndex }) => ({
            stepIndex: stepIndex - 1
        }));
    }
};

<div>
    <Timeline
        titles={state.titles}
        changeStepIndex={changeStepIndex}
        stepIndex={state.stepIndex}
        locked={true}
        disableStep={2}
        tip2={<p>hello</p>}
    />
    <div>
        <button onClick={back}>back</button>
        <button onClick={next}>next</button>
    </div>
</div>;
```
