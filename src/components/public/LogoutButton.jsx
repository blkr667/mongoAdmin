import React from 'react';
import dbClient from "../../utils/dbClient";
import {connect} from "react-redux";
import {
    Link, withRouter, Redirect
} from 'react-router-dom';

class LogoutButton extends React.Component {
    constructor() {
        super();
        this.logout = this.logout.bind(this);
    }

    render() {
        return (
            <a>
                <button onClick={this.logout} className="btn btn-sm btn-outline-secondary ml-1" type="button">
                    Logout
                </button>
            </a>
        )
    }

    logout() {
        const {logout, history} = this.props;
        dbClient.auth.logout(
            () => {
                logout();
                history.push('/logoutPage');
            });
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            dispatch({type: "LOG_OUT"})
        }
    };
};

export default withRouter(connect(null, mapDispatchToProps)(LogoutButton));