import React from 'react';
import {
    Link, withRouter
} from 'react-router-dom';
class LogoutPage extends React.Component {

    render() {
        return (
            <div className="jumbotron  mb-md-3 mt-md-3">
                <h3 className="display-4">Logged out successfully!</h3>

                <Link to="/loginPage">
                    <button className="btn btn-primary btn-md" type="button">
                        Go to Login Page
                    </button>
                </Link>
            </div>
        )
    }
}

export default LogoutPage;