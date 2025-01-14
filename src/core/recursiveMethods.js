import { Children, isValidElement, cloneElement } from 'react';

export const cloneRecursively = (child, conditionFnc, renderFnc, ignoreFnc = () => false) => (
    child
        && isValidElement(child)
        ? recursivelyFindRealChildren(
            {
                child,
                renderFnc,
                conditionFnc,
                ignoreFnc,
            },
        )
        : null
);

const recursivelyFindRealChildren = ({ child, ...props }) => {
    // Extract props for local usage but remain in props to get passed forward
    const { conditionFnc, renderFnc, ignoreFnc } = props;

    if (conditionFnc(child)) {
        // Clone current layout element and continue traversing children
        return cloneElement(child, {
            children: Children.map(child.props.children, innerChild => recursivelyFindRealChildren({ child: innerChild, ...props }))
        });
    }
    if (ignoreFnc(child)) {
        return child // Just simple return, no recursion or applying the field props
    }

    // Non-layout element found - recursion's bottom
    return renderFnc(child, props);
};
