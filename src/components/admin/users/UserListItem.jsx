import React from 'react';
import {
    Link
} from 'react-router-dom'
class UserListItem extends React.Component {

    render() {
        const {user} = this.props;
        return (

                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 className="my-0">{user.username}</h6>
                            <small className="text-muted">{user.displayName}</small>
                        </div>
                        <span className="text-muted">
                            <Link to={"/admin/users/"+user._id}>
                                <button className="float-right btn btn-light btn-sm ml-1">Show details</button>
                            </Link>
                        </span>
                    </li>

        )
    }
}

export default UserListItem;