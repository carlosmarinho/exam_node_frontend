// in src/users.js
import React from 'react';
import { List, Datagrid, TextField, Edit, Create, EditButton, DeleteButton, SimpleForm, TextInput, DisabledInput } from 'react-admin';

export const ProductList = (props) => (
    <List title="Todos os Produtos" {...props} >
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="price" />
            <TextField source="photo" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

const ProductName = ({ record }) => {
    return <span>Produto {record ? `"${record.name}"` : ''}</span>;
};

export const ProductEdit = (props) => (
    <Edit title={<ProductName />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            
            <TextInput source="name" />
            <TextInput source="price" />
            <TextInput source="photo" />
        </SimpleForm>
    </Edit>
);

export const ProductCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <TextInput source="price" />
            <TextInput source="photo" />
        </SimpleForm>
    </Create>
);