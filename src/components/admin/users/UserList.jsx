import React from 'react';
import dbClient from '../../../utils/dbClient';
import {
    Link
} from 'react-router-dom'
import UserListItem from './UserListItem'
class UserList extends React.Component {
    constructor() {
        super();
        this.setUserList = this.setUserList.bind(this);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        dbClient.users.fetchUsers(this.setUserList);
    }

    setUserList(users) {
        this.setState({users});
    }

    render() {
        return (
            <div className="jumbotron bg-light mt-md-3">
                <h2>Users</h2>

                <ul className="list-group mb-3 w-50">
                        {this.state.users.map(
                            user =>
                                <UserListItem key={user.username} user={user} />
                        )}
                </ul>
                <Link to="/admin/users/new">
                    <button className="btn btn-primary mt-md-2 btn-md">Create new user</button>
                </Link>
            </div>
        )
    }
}

export default UserList;