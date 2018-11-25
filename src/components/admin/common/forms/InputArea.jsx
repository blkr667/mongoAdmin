import React from 'react';

class InputArea extends React.Component {
    render() {
        const {label, inputValue, disabled, onChange} = this.props;
        return <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">{label}</span>
            </div>
            <textarea
                rows="4"
                disabled={disabled}
                className="form-control"
                placeholder="Enter text"
                value={inputValue}
                onChange={onChange}
            />
        </div>
    }
}

export default InputArea;