import React from 'react';

class InputText extends React.Component {
    render() {
        const {label, inputValue, disabled, onChange} = this.props;
        return <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">{label}</span>
            </div>
            <input
                disabled={disabled}
                type="text"
                className="form-control"
                placeholder="Enter text"
                value={inputValue}
                onChange={onChange}
            />
        </div>
    }
}

export default InputText;