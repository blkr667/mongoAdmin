import React from 'react';
import {
    Link, withRouter
} from 'react-router-dom'

import dbClient from '../../../utils/dbClient';

class UserCreate extends React.Component {

    constructor() {
        super();
        this.createUser = this.createUser.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setDisplayName = this.setDisplayName.bind(this);
    }

    setUsername(event) {
        this.setState({username: event.target.value});
    }

    setPassword(event) {
        this.setState({password: event.target.value});
    }

    setDisplayName(event) {
        this.setState({displayName: event.target.value});
    }

    createUser() {
        const {history} = this.props;
        const user = {
            username: this.state.username,
            password: this.state.password,
            displayName: this.state.displayName
        };
        dbClient.users.createUser(
            user,
            (authenticationStatus) => {
                history.push('/admin/users');
            });
    }

    render() {
        return (
            <div className="jumbotron bg-light mt-md-3">
                <div className="card w-50">
                    <div className="card-header">
                        Create user:
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4 ">
                                <strong className="card-title float-right">username:</strong>
                            </div>
                            <div className="col-md-6">
                                <input type="text" placeholder="Enter Username" onChange={this.setUsername} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <strong className="card-title float-right" >display name:</strong>
                            </div>
                            <div className="col-md-6">
                                <input type="text" placeholder="Enter displayName" onChange={this.setDisplayName} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <strong className="card-title float-right">password:</strong>
                            </div>
                            <div className="col-md-6">
                                <input type="password" placeholder="Enter password" onChange={this.setPassword} />
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <Link to="/admin/users">
                            <button className="btn  btn-success btn-md mr-1">Go back to Users</button>
                        </Link>
                        <button className="btn btn-primary btn-md  mr-1" onClick={this.createUser}>Create user</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(UserCreate);