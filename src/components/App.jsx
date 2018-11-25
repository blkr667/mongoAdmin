import React from 'react';
import { withRouter, Route, Link, Switch } from 'react-router-dom';
import {connect} from "react-redux";


import LoginPage from './public/LoginPage';
import LogoutPage from './public/LogoutPage';
import AdminPanel from './admin/AdminPanel';

import ForbiddenPage from './public/ForbiddenPage';
import MainNavbar from './public/MainNavbar';
import PrivateRoute from './auth/PrivateRoute';
import ProtectedRoute from './auth/ProtectedRoute';

import authenticationHandler from '../utils/authenticationHandler';


class App extends React.Component {

    constructor(props) {
        super(props);
        const {authenticated} = props;
        this.state = {
            authenticated
        };
        this.setAuthenticated = this.setAuthenticated.bind(this);
    }

    setAuthenticated() {
        this.setState({authenticated: true});
    }


    render() {
        const {authenticated} = this.props;
        return (
                <div className="login-background">
                    <MainNavbar/>

                    <div className="container">
                        <Switch>
                            <Route component={LoginPage} path="/" exact/>
                            <Route component={LoginPage} path="/loginPage"/>
                            <Route component={LogoutPage} path="/logoutPage"/>
                            <ProtectedRoute component={AdminPanel} path="/admin" authenticated={authenticated}/>
                            <Route component={ForbiddenPage}/>
                        </Switch>
                    </div>

                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { authenticated: state.authenticated };
};

export default withRouter(connect(mapStateToProps)(App));
