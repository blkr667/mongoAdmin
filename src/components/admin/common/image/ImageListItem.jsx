import React from 'react';
import InputText from '../forms/InputText';
import InputFile from '../forms/InputFile';
import dbClient from '../../../../utils/dbClient';

class ImageListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            disabled: true,
            value: props.image.value
        };
        this.setName = this.setName.bind(this);
        this.setValue = this.setValue.bind(this);
        this.edit = this.edit.bind(this);
        this.cancel = this.cancel.bind(this);
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);
    }
    edit() {
        this.setState({disabled: false});
    }
    save() {
        const {value} = this.state;
        const {id, refresh, image: {name}} = this.props;
        const formImageData = new FormData();
        formImageData.append("name", name);
        formImageData.append("base64image", value.base64image);
        formImageData.append("fileName", value.fileName);
        formImageData.append("fileType", value.fileType);
        dbClient.customizedPages.editImage(id, formImageData, refresh);
        this.setState({disabled: true});
    }
    delete() {
        const {id, refresh, image: {name}} = this.props;
        dbClient.customizedPages.deleteImage(id, {name}, refresh);
    }
    cancel() {
        this.setState({disabled: true});
    }
    setName(event) {
        this.setState({name: event.target.value});
    }
    setValue(file) {
        this.setState({value: file});
    }
    render() {
        const {image: {name}} = this.props;
        const {disabled, value} = this.state;
        return <div className={disabled ? "card-body" : "card-body text-white bg-info"}>
                <InputText disabled={true} label="Name" inputValue={name} onChange={this.setName} />
                <InputFile disabled={disabled} label="Value" inputValue={value} onChange={this.setValue} />
                <div className="btn-group mt-3" role="group">
                    {disabled && <button className="btn btn-primary" type="button" onClick={this.edit}>Edit</button>}
                    {disabled && <button className="btn btn-danger" type="button" onClick={this.delete}>Delete</button>}
                    {!disabled && <button className="btn btn-success" type="button" onClick={this.save}>Save</button>}
                    {!disabled && <button className="btn btn-secondary" type="button" onClick={this.cancel}>Cancel</button>}
                </div>
            </div>;
    }
}

export default ImageListItem;