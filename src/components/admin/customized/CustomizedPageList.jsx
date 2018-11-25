import React from 'react';
import dbClient from '../../../utils/dbClient';
import {
    Link
} from 'react-router-dom'
import CustomizedPageListItem from './CustomizedPageListItem'

class CustomizedPageList extends React.Component {
    constructor() {
        super();
        this.setPageList = this.setPageList.bind(this);
        this.state = {
            pages: []
        }
    }

    componentDidMount() {
        dbClient.customizedPages.fetchList(this.setPageList);
    }

    setPageList(pages) {
        this.setState({pages});
    }

    render() {
        return (
            <div className="jumbotron bg-light mt-md-3">
                <h2>Customized Pages</h2>

                <ul className="list-group mb-3 w-50">
                    {this.state.pages.map(
                        page =>
                            <CustomizedPageListItem
                                key={page.name}
                                page={page} />
                    )}
                </ul>
                <Link to="/admin/customizedPages/new">
                    <button className="btn btn-primary mt-md-2 btn-md">Create customized page</button>
                </Link>
            </div>
        )
    }
}

export default CustomizedPageList;