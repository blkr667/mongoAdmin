import React from 'react';
import {
    Redirect, withRouter
} from 'react-router-dom'

import dbClient from '../../utils/dbClient';
import {connect} from "react-redux";

class LoginPage extends React.Component {

    constructor() {
        super();
        this.state = {
            redirectToReferrer: false,
            errorMsg: null
        };
        this.login = this.login.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }

    setUsername(event) {
        this.setState({username: event.target.value});
    }

    setPassword(event) {
        this.setState({password: event.target.value});
    }


    login() {
        const user = {username: this.state.username, password: this.state.password};
        dbClient.auth.login(
            (authenticationStatus) => {
                this.props.authenticate(user.username);
                this.setState({redirectToReferrer: authenticationStatus});
            },
            (errorMsg) => {
                this.setState({errorMsg});
            },
            user);
    }

    handleKeyPress = (event) => {
        if(event.key == 'Enter'){
            if(this.state.username && this.state.password) {
                this.login();
            } else {
                this.setState({errorMsg: "Enter username and password"});
            }
        }
    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/admin' } };
        const { redirectToReferrer, errorMsg } = this.state;
        if (redirectToReferrer) {
            return <Redirect to={from} />
        }

        return (
            <div className="jumbotron mx-auto mb-md-3 mt-md-3 w-50" onKeyPress={this.handleKeyPress}>
                <h3 className="display-4">Login page!</h3>

                <input type="text" placeholder="Enter username" onChange={this.setUsername} required className="form-control mt-md-3" />
                <input type="password" placeholder="Enter password" onChange={this.setPassword} required className="form-control mt-md-3"  />

                {this.state.username && this.state.password ?
                    <button type="button" onClick={this.login} className="btn btn-primary mt-md-3">
                        Log in
                    </button> :
                    <button type="button" className="btn btn-primary mt-md-3 disabled">
                        Log in
                    </button>
                }

                {errorMsg &&
                    <div className="mt-md-3 alert alert-danger" role="alert">
                        <strong> Can not login</strong>
                        <p>{errorMsg}</p>
                    </div>
                }
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authenticate: (username) => {
            dispatch({type: "AUTHENTICATE", username})
        }
    };
};

const mapStateToProps = (state) => {
    return { authenticated: state.authenticated };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
