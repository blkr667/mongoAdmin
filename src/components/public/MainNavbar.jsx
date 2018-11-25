import React from 'react';
import {
    Link, withRouter
} from 'react-router-dom';
import {connect} from "react-redux";
import LogoutButton from "./LogoutButton";


class MainNavbar extends React.Component {
    render() {
        const {authenticated, loggedUser} = this.props;
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <span className="navbar-brand  mr-auto" >Bongo Admin</span>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    {!authenticated && <span className="navbar-nav ml-auto">
                         <Link to="/loginPage">
                            <button className="btn btn-sm btn-outline-secondary ml-1" type="button">
                                Login
                            </button>
                         </Link>

                    </span>}
                    {authenticated && <span className="navbar-nav ml-auto">
                            <span className="navbar-brand mb-0">Logged as <strong>{loggedUser}</strong></span>
                            <LogoutButton />
                            <Link to="/admin">
                                <button className="btn btn-sm btn-outline-secondary ml-1" type="button">
                                    Admin
                                </button>
                            </Link>
                    </span>}
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedUser: state.loggedUser,
        authenticated: state.authenticated
    };
};

export default withRouter(connect(mapStateToProps)(MainNavbar));
