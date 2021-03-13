# ra-compact-ui
Enhanced styling components for popular framework [`react-admin`](https://github.com/marmelab/react-admin). 

No extra dependencies are required except the ones react-admin is already using.

** This version forked by cadetstar, adding enhancements for enabling the use of Typography and other static text. See original repository at https://github.com/ValentinnDimitroff/ra-compact-ui

Why using? 
 - reduces styling boilerplate code
 - eases layout customizations 
 - maintains native usage of built-in `react-admin` components

Actively maintained and developed with monthly releases!

## Details View components

### Layouts
Layout components which allow building custom Show Layouts using unlimited nesting of `material-ui`'s `Box` or `Grid` components while maintaining native use of all of the `react-admin` field-related components. Each layout can be used inside the `Show` component as well as inside the `TabbedShowLayout`'s `Tab` component.

**Important** - In order for the layouts to work properly you should use the provided wrappers of the `material-ui`'s layout components named relatively - `RaBox` and `RaGrid`. They receive and pass directly all the props provided by the `material-ui`'s api.

Here are examples:
- [`BoxedShowLayout`](https://github.com/ValentinnDimitroff/ra-compact-ui/blob/master/src/details/BoxedShowLayout.js)

```jsx
const useStyles = makeStyles(theme => ({
    detailsBox: {
        paddingRight: "50px",
        borderRight: "solid thin",
        marginRight: "50px",
    },
}));

...

<BoxedShowLayout>
    <RaBox display="flex" >
        <RaBox display="flex" flexWrap="wrap" flexGrow={4} className={classes.detailsBox}>
            <RaBox flex="0 0 100%" display="flex" justifyContent="space-between">
                <ReferenceField label="Client Name" source="clientId" reference="clients">
                    <TextField source="name" />
                </ReferenceField>
                <ChipField source="progressStatus" label="Progress Status" />
                <TextField source="priority" />
            </RaBox>
            <RaBox flex="0 0 100%" display="flex" justifyContent="space-between">
                <DateField source="startDate" />
                <TextField source="timeElapsed" />
                <DateField source="deadline" />
            </RaBox>
        </RaBox>
        <RaBox display="inline-flex" flexDirection="column" flexGrow={1}>
            <ReferenceField label="Project Manager" source="managerId" reference="staff">
                <UserChipField source="fullName"  />
            </ReferenceField>
            <ReferenceField label="Product Owner" source="productOwnerId" reference="staff">
                <UserChipField source="fullName"  />
            </ReferenceField>
            <ReferenceField label="Marketing Specialist" source="marketingSpecialistId" reference="staff">
                <UserChipField source="fullName"  />
            </ReferenceField>
        </RaBox>
    </RaBox>
    <RaBox flex="0 0 100%" display="flex" mt="20px">
        <ArrayField source="activityRecords">
            <Datagrid>
                <DateField source="date" />
                <TextField source="description" />
                <TextField source="memberNames" />
            </Datagrid>
        </ArrayField>
    </RaBox>
</BoxedShowLayout>
```

![image](https://user-images.githubusercontent.com/26602880/98883065-64d05000-2496-11eb-8551-c281123cf041.png)


- [`GridShowLayout`](https://github.com/ValentinnDimitroff/ra-compact-ui/blob/master/src/details/GridShowLayout.js)

## About Author

An enthusiast in :sparkling_heart: with building software who likes to call it "the grown up's LEGO".

If you enjoy the library and want to support me, you can always <a href="https://www.buymeacoffee.com/vdimitroff" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee" /></a>

