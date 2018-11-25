import React from 'react'
import {withRouter} from "react-router-dom";

import {authenticationHandler} from '../../utils/authenticationHandler';

const LogoutButton = withRouter(({ history }) => (
    authenticationHandler.isAuthenticated ? (
        <p>
            Welcome! <button onClick={() => {
            authenticationHandler.signout(() => history.push('/'))
        }}>Sign out</button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    )
))

export default LogoutButton;