import React from 'react';
import {
    Redirect,
    Link
} from 'react-router-dom'

import dbClient from '../../../utils/dbClient';

class User extends React.Component {

    constructor() {
        super();
        this.state = {
            user: null,
            deleted: false
        };
        this.setUser = this.setUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.redirectToUserList = this.redirectToUserList.bind(this);
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        dbClient.users.fetchUser(id, this.setUser);
    }

    setUser(user) {
        this.setState({user});
    }

    redirectToUserList(user) {
        if (user)
            this.setState({deleted: true});
    }

    deleteUser() {
        dbClient.users.deleteUser(this.state.user._id, this.redirectToUserList);
    }

    render() {
        if(!this.state.user)
            return <div>Loading user...</div>;

        if(this.state.deleted)
            return <Redirect to={'/admin/users'} />

        return (
            <div className="jumbotron bg-light mt-md-3">

                <div className="card w-50">
                    <div className="card-header">
                        User details:
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4 ">
                                <strong className="card-title float-right">username:</strong>
                            </div>
                            <div className="col-md-6">
                                {this.state.user.username}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <strong className="card-title float-right" >display name:</strong>
                            </div>
                            <div className="col-md-6">
                                {this.state.user.displayName}
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <Link to="/admin/users">
                            <button className="btn  btn-success btn-md mr-1">Go back to Users</button>
                        </Link>
                        <button className="btn btn-primary btn-md mr-1" onClick={this.deleteUser}>Delete</button>
                        <Link to={`/admin/users/${this.state.user._id}/edit`}>
                            <button className="btn btn-primary btn-md mr-1">Edit</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default User;