Vertical Examples:

```js
const { Icon } = require('../');
<div className="flexSpaceAround max-30" style={{ background: '#f5f6f7' }}>
    <ToolTip alignment={['top', 'right']} tip={<p color="white">Top Box</p>} title="this is my title">
        <Icon name="infoCircle" />
    </ToolTip>

    <ToolTip tip={<p>bottom Box</p>}>
        <Icon name="infoCircle" />
    </ToolTip>

    <ToolTip alignment={['top', 'center']} carrot={false} tip={<p>No Carrot</p>}>
        <Icon name="infoCircle" />
    </ToolTip>

    <ToolTip
        alignment={['top', 'left']}
        tip={
            <p>
                Top Box with longer text and a lot of content carrot will have a margin percentage of the box
            </p>
        }
    >
        <Icon name="infoCircle" />
    </ToolTip>

    <ToolTip
        color="black"
        alignment={['bottom', 'left']}
        tip={<p color="white">If you want a click interaction</p>}
        click
    >
        <Icon name="infoCircle" />
    </ToolTip>
</div>;
```

Horizontal Example:

```js
const { Icon } = require('../');
<div className="flexSpaceAround max-30" style={{ background: '#f5f6f7' }}>
    <ToolTip
        alignment={['bottom', 'right']}
        tip={<p color="white">Top Box</p>}
        title="this is my title"
        horizontal
    >
        <Icon name="infoCircle" />
    </ToolTip>

    <ToolTip alignment={['center', 'right']} tip={<p>Center Box</p>} horizontal>
        <Icon name="infoCircle" />
    </ToolTip>

    <ToolTip alignment={['center', 'right']} carrot={false} tip={<p>No Carrot</p>} horizontal>
        <Icon name="infoCircle" />
    </ToolTip>

    <ToolTip
        alignment={['bottom', 'left']}
        tip={
            <p style={{ lineHeight: 1.3, width: '80px' }}>
                Top Box with longer text and a lot of content carrot will have a margin percentage of the box.
                Isn't that cool. This is such a long and pointless tooltip.
            </p>
        }
        horizontal
    >
        <Icon name="infoCircle" />
    </ToolTip>

    <ToolTip
        color="black"
        alignment={['center', 'left']}
        tip={<p color="white">If you want a click interaction</p>}
        click
        horizontal
    >
        <Icon name="infoCircle" />
    </ToolTip>
</div>;
```
