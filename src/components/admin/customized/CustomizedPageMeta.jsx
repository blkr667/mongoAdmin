import React from 'react';
import InputText from '../common/forms/InputText';
import dbClient from '../../../utils/dbClient';

class CustomizedPageMeta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            name: props.page.name,
            value: props.page.value
        };
        this.setName = this.setName.bind(this);
        this.setValue = this.setValue.bind(this);
        this.edit = this.edit.bind(this);
        this.cancel = this.cancel.bind(this);
        this.save = this.save.bind(this);
    }
    edit() {
        this.setState({disabled: false});
    }
    save() {
        const {name, value} = this.state;
        const {page, refresh} = this.props;
        dbClient.customizedPages.edit({...page, ...{name, value}}, refresh);
        this.setState({disabled: true});
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
        const {urlId} = this.props;
        const {disabled, name, value} = this.state;
        return <React.Fragment>
            <div className="card-header text-white bg-secondary">
                <h4>Customized page ({urlId})</h4>
            </div>
            <div className={disabled ? "card-body" : "card-body text-white bg-info"}>
                <InputText disabled={true} label="Name" inputValue={name} onChange={this.setName} />
                <InputText disabled={disabled} label="Value" inputValue={value} onChange={this.setValue} />
                <div className="btn-group" role="group">
                        {disabled && <button className="btn btn-primary" type="button" onClick={this.edit}>Edit</button>}
                        {!disabled && <button className="btn btn-success" type="button" onClick={this.save}>Save</button>}
                        {!disabled && <button className="btn btn-secondary" type="button" onClick={this.cancel}>Cancel</button>}
                </div>
            </div>
        </React.Fragment>;
    }
}

export default CustomizedPageMeta;