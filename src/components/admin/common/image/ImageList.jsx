import React from 'react';
import ImageListItem from './ImageListItem';
import ImageCreate from './ImageCreate';

class ImageList extends React.Component {
    render() {
        const {images, id, refresh} = this.props;
        return (
            <React.Fragment>
                <div className="card-header text-white bg-secondary"><h4>Images</h4></div>
                {images && images.map(
                    image =>
                        <ImageListItem refresh={refresh} key={image.name} image={image} id={id}/>
                )}
                <ImageCreate id={id} refresh={refresh}/>
            </React.Fragment>
        )
    }
}

export default ImageList;