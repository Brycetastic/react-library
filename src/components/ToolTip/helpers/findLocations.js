/**
 * findTop figures out where the top of the TipDisplay should go
 * @param {element} target
 */
export const findTop = target => {
    const margin = 10;
    const { pageYOffset } = window;
    const top = Math.round(target.bottom + pageYOffset + margin);

    return top;
};
export const findHorzTop = (tip, target, align) => {
    // margin = (margin of carrot from edge of box) - (height of carrot)
    const margin = tip.height * 0.15 - 8;
    const { pageYOffset } = window;

    let top = align === 'center' ? target.top + target.height / 2 : target.top;
    top += pageYOffset;

    if (align === 'center') {
        top -= tip.height / 2;
    } else if (align === 'bottom') {
        top -= margin;
    }

    return top;
};

/**
 * findBottom figures out where the bottom of the TipDisplay should go
 * @param {element} target
 */
export const findBottom = target => {
    const margin = 10;
    const { pageYOffset } = window;
    const { clientHeight } = document.documentElement;

    return Math.round(clientHeight - (target.top + pageYOffset) + margin);
};
export const findHorzBottom = (tip, target) => {
    // margin = (margin of carrot from edge of box) - (height of carrot)
    const margin = tip.height * 0.15 - 8;
    const { pageYOffset } = window;
    const { clientHeight } = document.documentElement;

    return Math.round(clientHeight - (target.bottom + pageYOffset) - margin);
};

/**
 * findLeft figures out where the left of the TipDisplay should go
 * @param {element} tip
 * @param {element} target
 * @param {string} align horizontal position 'left', 'center', 'right'
 */
export const findLeft = (tip, target, align) => {
    // margin = (margin of carrot from edge of box) + (width of carrot)
    const margin = tip.width * 0.15 + 8;

    // find horizontal position
    let left = align === 'center' ? target.left + target.width / 2 : target[align];
    left += window.pageXOffset;

    if (align === 'center') {
        left -= tip.width / 2;
    } else if (align === 'right') {
        left -= target.width / 2 + margin;
    } else if (align === 'left') {
        left -= tip.width;
        left += target.width / 2 + margin;
    }

    return left;
};
export const findHorzLeft = (tip, target, align) => {
    const margin = 10;
    if (align === 'right') {
        return target.right + margin;
    }

    return target.left - tip.width - margin;
};

/**
 * using the above functions setPosition sets
 * top, bottom, and left of tip box
 * based on the alignment specified by user
 * @param {element} tip
 * @param {element} target
 * @param {object} param2 state values
 */
export const setPosition = (tip, target, { vert, horz, mobileView }, isHorizontal) => {
    if (mobileView) {
        return {
            top: 0,
            bottom: 'unset',
            left: '0'
        };
    }

    if (isHorizontal) {
        return {
            top: vert !== 'top' ? findHorzTop(tip, target, vert) : 'unset',
            bottom: vert === 'top' ? findHorzBottom(tip, target) : 'unset',
            left: findHorzLeft(tip, target, horz)
        };
    }
    return {
        top: vert === 'top' ? 'unset' : findTop(target),
        bottom: vert === 'bottom' ? 'unset' : findBottom(target),
        left: findLeft(tip, target, horz)
    };
};

export const pagePosition = () => {
    const headerHeight = 47;
    const windowHeight = window.innerHeight;
    const scrollTop =
        window.pageYOffset !== undefined
            ? window.pageYOffset
            : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    return {
        top: scrollTop + headerHeight,
        bot: scrollTop + windowHeight
    };
};

/**
 * @param {element} tip
 * @param {element} target
 * @param {string} vert 'top', 'bottom', 'center'
 */
export const toolTipPosition = (tip, target, vert, isHorizontal) => {
    const toolTipHeight = tip.height;
    let top = 0;
    let bot = 0;

    if (isHorizontal) {
        if (vert !== 'top') {
            top = findHorzTop(tip, target, vert);
            bot = toolTipHeight + top;
        } else {
            bot = findHorzBottom(tip, target);
            top = bot - toolTipHeight;
        }
    } else {
        top = findTop(target);
        bot = top + toolTipHeight;
    }

    return { top, bot };
};

export const isMobile = () => {
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    return windowWidth <= 600;
};
