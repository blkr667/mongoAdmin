import React from 'react';
import {
    Link
} from 'react-router-dom'

import dbClient from '../../../utils/dbClient';

class UserEditForm extends React.Component {

    constructor() {
        super();
        this.editUser = this.editUser.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setDisplayName = this.setDisplayName.bind(this);
        this.setUser = this.setUser.bind(this);
        this.redirectToUserList = this.redirectToUserList.bind(this);
        this.state = {
            user:null,
            modified: false
        };
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        dbClient.users.fetchUser(id, this.setUser);
    }

    setUsername(event) {
        this.setState({user: {...this.state.user, username: event.target.value}});
    }

    setDisplayName(event) {
        this.setState({user: {...this.state.user, displayName: event.target.value}});
    }

    editUser() {
        dbClient.users.editUser(this.state.user, this.redirectToUserList);
    }

    setUser(user) {
        this.setState({user});
    }

    redirectToUserList(user) {
        if (user)
            this.setState({modified: true});
    }

    render() {
        if(!this.state.user)
            return <div>Loading user...</div>

        if(this.state.modified)
            return <Redirect to={'/admin/users'} />

        return (

                <div className="jumbotron bg-light mt-md-3">
                    <div className="card w-50">
                        <div className="card-header">
                            Edit user:
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4 ">
                                    <strong className="card-title float-right">username:</strong>
                                </div>
                                <div className="col-md-6">
                                    <input value={this.state.user.username} type="text" placeholder="Enter Username" onChange={this.setUsername} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <strong className="card-title float-right" >display name:</strong>
                                </div>
                                <div className="col-md-6">
                                    <input value={this.state.user.displayName} type="text" placeholder="Enter display name" onChange={this.setDisplayName} />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <Link to="/admin/users">
                                <button className="btn  btn-success btn-md mr-1">Go back to Users</button>
                            </Link>
                            <button className="btn btn-primary btn-md  mr-1" onClick={this.editUser}>Modify user</button>
                        </div>
                    </div>
                </div>
        )
    }
}

export default UserEditForm;