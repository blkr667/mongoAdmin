import React from 'react';
import InputText from '../forms/InputText';
import dbClient from '../../../../utils/dbClient';

class HeadingCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            creation: false,
            name: "",
            value: ""
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
        const newHeading = {name, value, type: "heading"};
        dbClient.customizedPages.addHeading(id, newHeading, refresh)
    }
    cancel() {
        this.setState({creation: false});
    }
    setName(event) {
        this.setState({name: event.target.value});
    }
    setValue(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const {creation, name, value} = this.state;

        if(!creation)
            return <div className="card-body">
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-primary" onClick={this.create}>Add new heading</button>
                </div>
            </div>;

        return <div className="card-body text-white bg-info">
                Create new heading:
                <InputText label="Name" inputValue={name} onChange={this.setName} />
                <InputText label="Value" inputValue={value} onChange={this.setValue} />
                <div className="btn-group" role="group">
                    <button className="btn btn-success" type="button" onClick={this.save}>Save</button>
                    <button className="btn btn-secondary" type="button" onClick={this.cancel}>Cancel</button>
                </div>
            </div>;
    }
}

export default HeadingCreate;