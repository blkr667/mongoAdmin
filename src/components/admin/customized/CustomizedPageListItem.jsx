import React from 'react';
import {
    Link
} from 'react-router-dom'
import dbClient from '../../../utils/dbClient';

class CustomizedPageListItem extends React.Component {
    constructor() {
        super();
        this.state = {deleted: false};
        this.deleteCustomizedPage = this.deleteCustomizedPage.bind(this);
    }
    deleteCustomizedPage() {
        const {page} = this.props;
        dbClient.customizedPages.delete(page._id,  () => {
            this.setState({deleted: true})
        })

    }
    render() {
        const {page} = this.props;
        if(this.state.deleted)
            return null;
        return (

                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 className="my-0">{page.name}</h6>
                        </div>
                        <span className="text-muted">
                            <Link to={"/admin/customizedPages/" + page.name}>
                                <button className="btn btn-primary mt-md-2 btn-md">Show</button>
                            </Link>
                        </span>
                    </li>

        )
    }
}

export default CustomizedPageListItem;