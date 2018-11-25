import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from './Home';
import AdminNavbar from './AdminNavbar';
import About from './About';
import UserList from './users/UserList';
import UserCreate from './users/UserCreate';
import UserEdit from './users/UserEdit';
import User from './users/User';

import CustomizedPageList from './customized/CustomizedPageList';
import CustomizedPageCreate from './customized/CustomizedPageCreate';
import CustomizedPage from './customized/CustomizedPage';

import NotFoundPage from './NotFoundPage';

class AdminPanel extends React.Component {

    render() {
        return <div>

            <AdminNavbar />

                        <Switch>
                            <Route exact path="/admin/" component={Home}/>
                            <Route path="/admin/home" component={Home}/>
                            <Route path="/admin/about" component={About}/>

                            <Route exact path="/admin/customizedPages" component={CustomizedPageList}/>
                            <Route exact path="/admin/customizedPages/new" component={CustomizedPageCreate}/>
                            <Route exact path="/admin/customizedPages/:id" component={CustomizedPage}/>

                            <Route exact path="/admin/users" component={UserList}/>
                            <Route exact path="/admin/users/new" component={UserCreate}/>
                            <Route exact path="/admin/users/:id" component={User}/>
                            <Route exact path="/admin/users/:id/edit" component={UserEdit}/>

                            <Route component={NotFoundPage}/>
                        </Switch>

        </div>;
    }
}

export default AdminPanel;