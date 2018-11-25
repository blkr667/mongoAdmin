import React from 'react';
import { withRouter} from 'react-router-dom'

import HeadingList from '../common/heading/HeadingList';
import ParagraphList from '../common/paragraph/ParagraphList';
import ImageList from '../common/image/ImageList';
import CustomizedPageMeta from './CustomizedPageMeta';
import dbClient from '../../../utils/dbClient';

class CustomizedPage extends React.Component {

    constructor() {
        super();
        this.state = {page: null};
        this.setPage = this.setPage.bind(this);
        this.refresh = this.refresh.bind(this);
        this.deleteCustomizedPage = this.deleteCustomizedPage.bind(this);
    }
    setPage(page) {
        this.setState({page});
    }

    componentDidMount() {
        this.refresh();
    }

    refresh() {
        const pageName = this.props.match.params.id;
        dbClient.customizedPages.fetch(pageName, this.setPage);
    }
    deleteCustomizedPage() {
        const page = this.state.page;
        const {history} = this.props;
        history.push('/admin/customizedPages');
        dbClient.customizedPages.delete(page._id)
    }

    render() {
        const page = this.state.page;
        const urlId = this.props.match.params.id;
        if(!page)
            return null;
        return (
            <div className="jumbotron bg-light mt-md-3">
                <div className="card w-50">
                    <CustomizedPageMeta refresh={this.refresh} page={page} urlId={urlId}/>
                    <HeadingList refresh={this.refresh} headings={page.headings} id={page._id}/>
                    <ParagraphList refresh={this.refresh} paragraphs={page.paragraphs} id={page._id}/>
                    <ImageList refresh={this.refresh} images={page.images} id={page._id}/>
                    <button
                        onClick={this.deleteCustomizedPage}
                        className="btn btn-danger mt-md-2 btn-md"
                        type="button"
                    >Delete</button>

                </div>
            </div>
        )
    }
}

export default withRouter(CustomizedPage);