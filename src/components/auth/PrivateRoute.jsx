import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'

import authenticationHandler from '../../utils/authenticationHandler';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
    <Route {...rest} render={(props) => {
        return authenticated
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/loginPage',
                state: {from: props.location}
            }}/>


    }} />
)
export default PrivateRoute;