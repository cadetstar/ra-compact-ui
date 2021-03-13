const EMPTY_LAYOUT_NODE_ERROR = 'Layout node has no found children! Nesting layout components should always end with a ra-field of any type!';

export const isComponentInNamedAry = (child, namesArr) => {
    return child.type && (namesArr.filter((name) => name === child.type.displayName).length > 0)
}

export const isLayoutComponent = (child, layoutComponentsNamesArr) => {
    if (child == null) {
        throw EMPTY_LAYOUT_NODE_ERROR;
    }
    return isComponentInNamedAry(child, layoutComponentsNamesArr)
};

export const getComponentsNames = (componentsArr) => componentsArr.map((x) => x.displayName);
