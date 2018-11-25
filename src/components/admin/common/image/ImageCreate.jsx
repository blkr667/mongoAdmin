import React from 'react';
import InputText from '../forms/InputText';
import InputFile from '../forms/InputFile';
import dbClient from '../../../../utils/dbClient';

class ImageCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            creation: false,
            name: "",
            value: null
        };
        this.setName = this.setName.bind(this);
        this.setValue = this.setValue.bind(this);
        this.create = this.create.bind(this);
        this.cancel = this.cancel.bind(this);
        this.save = this.save.bind(this);
    }
    create() {
        this.setState({creation: true});
    }
    save() {
        const {name, value} = this.state;
        const {id, refresh} = this.props;
        const formImageData = new FormData();
        formImageData.append("name", name);
        formImageData.append("base64image", value.base64image);
        formImageData.append("fileName", value.fileName);
        formImageData.append("fileType", value.fileType);
        dbClient.customizedPages.addImage(id, formImageData, refresh)
    }
    cancel() {
        this.setState({creation: false});
    }
    setName(event) {
        this.setState({name: event.target.value});
    }
    setValue(file) {
        this.setState({value: file});
    }

    render() {
        const {creation, name, value} = this.state;
        if(!creation)
            return <div className="card-body">
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-primary" onClick={this.create}>Add new image</button>
                </div>
            </div>;

        return <div className="card-body text-white bg-info">
                Create new image section:
                <InputText label="Name" inputValue={name} onChange={this.setName} />
                <InputFile label="Value" inputValue={value} onChange={this.setValue} />
                <div className="btn-group mt-3" role="group">
                    <button className="btn btn-success" type="button" onClick={this.save}>Save</button>
                    <button className="btn btn-secondary" type="button" onClick={this.cancel}>Cancel</button>
                </div>
            </div>;
    }
}

export default ImageCreate;