import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { CardContentInner } from 'react-admin';
import RaField from './RaField';
import { cloneRecursively, getComponentsNames, isLayoutComponent, isComponentInNamedAry } from '../core';

const sanitizeRestProps = ({
    children,
    className,
    record,
    resource,
    basePath,
    version,
    initialValues,
    translate,
    ...rest
}) => rest;

const CompactShowLayout = ({
    layoutComponents,
    ignoredComponents,
    basePath,
    className,
    children,
    record,
    resource,
    version,
    ...rest
}) => {
    const layoutComponentsNamesArr = getComponentsNames(layoutComponents);
    const ignoredComponentsNamesArr = getComponentsNames(ignoredComponents);

    return (
        <CardContentInner className={className} key={version} {...sanitizeRestProps(rest)}>
            {Children.map(
                children,
                (child) => cloneRecursively(
                    child,
                    (x) => isLayoutComponent(x, layoutComponentsNamesArr),
                    (x) => (
                        <RaField
                            field={x}
                            basePath={basePath}
                            record={record}
                            resource={resource}
                        />
                    ),
                    (x) => isComponentInNamedAry(x, ignoredComponentsNamesArr)
                ),
            )}
        </CardContentInner>
    );
};
CompactShowLayout.propTypes = {
    basePath: PropTypes.string,
    record: PropTypes.object,
    resource: PropTypes.string,
    version: PropTypes.number,
    children: PropTypes.node,
    className: PropTypes.string,
    layoutComponents: PropTypes.array,
    ignoredComponents: PropTypes.array
};

export default CompactShowLayout;
