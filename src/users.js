// in src/users.js
import React from 'react';
import { Filter, List, Edit, Create, EditButton, DeleteButton, SimpleForm, Datagrid, EmailField, TextInput, DisabledInput, TextField } from 'react-admin';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);


export const UserList = (props) => (
    <List title="Listagem dos Usuários" {...props} filters={<UserFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <EmailField source="email" />
            <EditButton />
        </Datagrid>
    </List>
);


const UserName = ({ record }) => {
    return <span>Usuário {record ? `"${record.username}"` : ''}</span>;
};

export const UserEdit = (props) => (
    <Edit title={<UserName />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="username" />
            <TextInput source="first_name" />
            <TextInput source="last_name" />
            <EmailField source="email" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="username" />
            <TextInput source="first_name" />
            <TextInput source="last_name" />
            <EmailField source="email" />
        </SimpleForm>
    </Create>
);