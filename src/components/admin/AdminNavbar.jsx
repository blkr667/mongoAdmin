import React from 'react';
import {
    Link, NavLink
} from 'react-router-dom';
class AdminNavbar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <span className="my-2 my-lg-0">
                    <NavLink className="btn btn-sm btn-success ml-1" activeClassName="btn-outline-success" to="/admin/home">
                        Home
                    </NavLink>
                    <NavLink className="btn btn-sm btn-success ml-1" activeClassName="btn-outline-success" to="/admin/about">
                        About
                    </NavLink>
                    <NavLink className="btn btn-sm btn-success ml-1" activeClassName="btn-outline-success" to="/admin/users">
                        Users
                    </NavLink>
                    <NavLink className="btn btn-sm btn-success ml-1" activeClassName="btn-outline-success" to="/admin/customizedPages">
                        Customized pages
                    </NavLink>



                        <button className="btn btn-sm btn-success ml-1 disabled" type="button">
                            Blog
                        </button>
                        <button className="btn btn-sm btn-success ml-1 disabled" type="button">
                            Pages
                        </button>
                        <button className="btn btn-sm btn-success ml-1 disabled" type="button">
                            Tags
                        </button>
                        <button className="btn btn-sm btn-success ml-1 disabled" type="button">
                            Account Settings
                        </button>
                        <button className="btn btn-sm btn-success ml-1 disabled" type="button">
                            Blog
                        </button>
                </span>
            </nav>
        )
    }
}

export default AdminNavbar;