import React from 'react';

class InputFile extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.handleFile = this.handleFile.bind(this);
    }
    handleFile(e) {
        const {onChange} = this.props;
        const file = this.fileInput.current.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            onChange({
                fileName: file.name,
                fileType: file.type,
                base64image: reader.result.split(',')[1]
            });
        };
        e.preventDefault();
    }

    render() {
        const {label, inputValue, disabled} = this.props;
        const fullBase64img = getBase64Image(inputValue)
        return <React.Fragment>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">{label}</span>
                </div>
                <div className="custom-file">
                    <input
                        disabled={disabled}
                        type="file"
                        className="custom-file-input"
                        onChange={this.handleFile}
                        ref={this.fileInput}
                        />
                    <label className="custom-file-label text-nowrap">{inputValue && inputValue.fileName || 'Choose file'}</label>
                </div>
            </div>
            <div>
                {inputValue && <img  className="img-thumbnail" src={fullBase64img} width='200px' />}
            </div>
        </React.Fragment>
    }
}

function getBase64Image(inputValue) {
    if(inputValue) {
        const base64img = inputValue.base64image ? inputValue.base64image : encode(inputValue.buffer.data);
        return `data:${inputValue.fileType};base64,${base64img}`;
    }
    return null;
}

function encode (input) {
    const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    let output = "";
    let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    let i = 0;

    while (i < input.length) {
        chr1 = input[i++];
        chr2 = i < input.length ? input[i++] : Number.NaN; // Not sure if the index
        chr3 = i < input.length ? input[i++] : Number.NaN; // checks are needed here

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }
        output += keyStr.charAt(enc1) + keyStr.charAt(enc2) +
            keyStr.charAt(enc3) + keyStr.charAt(enc4);
    }
    return output;
}

export default InputFile;