import React from 'react';
import {
    Link, withRouter
} from 'react-router-dom'

import InputText from '../common/forms/InputText';

import dbClient from '../../../utils/dbClient';

class CustomizedPageCreate extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            value: ""
        };
        this.setName = this.setName.bind(this);
        this.setValue = this.setValue.bind(this);
        this.createPage = this.createPage.bind(this);
    }
    setName(event) {
        this.setState({name: event.target.value});
    }
    setValue(event) {
        this.setState({value: event.target.value});
    }
    createPage() {
        const {history} = this.props;
        const page = {
            name: this.state.name,
            value: this.state.value
        };
        dbClient.customizedPages.create(
            page,
            () => {
                history.push('/admin/customizedPages/' + page.name);
            });
    }

    render() {
        return (
            <div className="jumbotron bg-light mt-md-3">
                <div className="card w-50">
                    <div className="card-header text-white bg-secondary">
                        <h5>Create customized page</h5>
                    </div>
                    <div className="card-body">
                        <InputText label="Name" inputValue={this.state.name} onChange={this.setName}/>
                        <InputText label="Value" inputValue={this.state.value} onChange={this.setValue}/>
                        <Link to="/admin/customizedPages">
                            <button className="btn  btn-success btn-md mr-1">Go back to Customized Pages</button>
                        </Link>
                        <button className="btn btn-primary btn-md  mr-1" onClick={this.createPage}>Create page</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CustomizedPageCreate);