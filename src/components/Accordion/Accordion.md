Accordion Example:

    <Accordion title="Accordion Title"><p>Anything you want can go in here</p></Accordion>

Secondary Accordion Example:

    <Accordion title="Accordion Title" accStyle="secondary"><p>Anything you want can go in here</p></Accordion>

Multiple Accordions:

```js
import { Box } from '../';

<div>
    <Accordion title="Anything">Anything you want can go in here</Accordion>
    <Accordion title="List">
        <ul>
            <li>Even</li>
            <li>A</li>
            <li>List</li>
        </ul>
    </Accordion>
    <Accordion title="Box">
        <Box>
            <h4>This is a Box</h4>
        </Box>
    </Accordion>
</div>;
```
