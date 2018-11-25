import React from 'react';
import HeadingListItem from './HeadingListItem';
import HeadingCreate from './HeadingCreate';

class HeadingList extends React.Component {
    render() {
        const {headings, id, refresh} = this.props;
        return (
            <React.Fragment>
                <div className="card-header text-white bg-secondary"><h4>Headings</h4></div>
                {headings && headings.map(
                    heading =>
                        <HeadingListItem refresh={refresh} key={heading.name} heading={heading} id={id}/>
                )}
                <HeadingCreate id={id} refresh={refresh}/>
            </React.Fragment>
        )
    }
}

export default HeadingList;