import React from 'react';
import InputText from '../forms/InputText';
import InputArea from '../forms/InputArea';
import dbClient from '../../../../utils/dbClient';

class ParagraphCreate extends React.Component {
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
        const newParagraph = {name, value, type: "paraprah"};
        dbClient.customizedPages.addParagraph(id, newParagraph, refresh)
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
                    <button type="button" className="btn btn-primary" onClick={this.create}>Add new paragraph</button>
                </div>
            </div>;

        return <div className="card-body text-white bg-info">
                Create new paragraph:
                <InputText label="Name" inputValue={name} onChange={this.setName} />
                <InputArea label="Value" inputValue={value} onChange={this.setValue} />
                <div className="btn-group" role="group">
                    <button className="btn btn-success" type="button" onClick={this.save}>Save</button>
                    <button className="btn btn-secondary" type="button" onClick={this.cancel}>Cancel</button>
                </div>
            </div>;
    }
}

export default ParagraphCreate;