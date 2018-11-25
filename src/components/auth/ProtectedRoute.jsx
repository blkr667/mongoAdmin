import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'

import authenticationHandler from '../../utils/authenticationHandler';


class ProtectedRoute extends React.Component {

    render() {
        const { component: Component, authenticated, ...rest } = this.props;
        return <Route {...rest} render={(props) => {
            return authenticated
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/loginPage',
                    state: {from: props.location}
                }}/>
        }} />
    }
}
export default ProtectedRoute;