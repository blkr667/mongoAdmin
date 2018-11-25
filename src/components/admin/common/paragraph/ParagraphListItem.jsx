import React from 'react';
import {
    Redirect,
    Link
} from 'react-router-dom'
import InputText from '../forms/InputText';
import dbClient from '../../../../utils/dbClient';

class ParagraphListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            name: props.paragraph.name,
            value: props.paragraph.value
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
        const {name, value} = this.state;
        const {id, refresh} = this.props;
        dbClient.customizedPages.editParagraph(id, {name, value}, refresh);
        this.setState({disabled: true});
    }
    delete() {
        const {name} = this.state;
        const {id, refresh} = this.props;
        dbClient.customizedPages.deleteParagraph(id, {name}, refresh);
    }
    cancel() {
        this.setState({disabled: true});
    }
    setName(event) {
        this.setState({name: event.target.value});
    }
    setValue(event) {
        this.setState({value: event.target.value});
    }
    render() {
        const {disabled, name, value} = this.state;
        return <div className={disabled ? "card-body" : "card-body text-white bg-info"}>
                <InputText disabled={true} label="Name" inputValue={name} onChange={this.setName} />
                <InputText disabled={disabled} label="Value" inputValue={value} onChange={this.setValue} />
                <div className="btn-group" role="group">
                    {disabled && <button className="btn btn-primary" type="button" onClick={this.edit}>Edit</button>}
                    {disabled && <button className="btn btn-danger" type="button" onClick={this.delete}>Delete</button>}
                    {!disabled && <button className="btn btn-success" type="button" onClick={this.save}>Save</button>}
                    {!disabled && <button className="btn btn-secondary" type="button" onClick={this.cancel}>Cancel</button>}
                </div>
            </div>;
    }
}

export default ParagraphListItem;