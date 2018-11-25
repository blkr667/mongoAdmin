import React from 'react';
import {
    Redirect,
    Link
} from 'react-router-dom'

import ParagraphListItem from './ParagraphListItem';
import ParagraphCreate from './ParagraphCreate';

class ParagraphList extends React.Component {
    render() {
        const {paragraphs, id, refresh} = this.props;
        return (
            <React.Fragment>
                <div className="card-header text-white bg-secondary"><h4>Paragraphs</h4></div>
                {paragraphs && paragraphs.map(
                    paragraph =>
                        <ParagraphListItem refresh={refresh} key={paragraph.name} paragraph={paragraph} id={id}/>
                )}
                <ParagraphCreate id={id} refresh={refresh}/>
            </React.Fragment>
        )
    }
}

export default ParagraphList;