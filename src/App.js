// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
//import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import { ProductList, ProductEdit, ProductCreate } from './products'
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import dataProvider from './dataProvider.js';

//const App = () => <Admin dataProvider={dataProvider} />;

//const dataProvider = jsonServerProvider('http://localhost:3001');
 
const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        {/*<Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />*/}
        {/*<Resource name="posts" list={PostList} icon={PostIcon} />*/}
        <Resource name="products" list={ProductList} icon={PostIcon} edit={ProductEdit} create={ProductCreate} />
        <Resource name="users" list={UserList} icon={UserIcon} />

    </Admin>
); 

export default App;
