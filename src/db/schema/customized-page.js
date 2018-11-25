import mongoose from 'mongoose';

const CustomizedPageSchema = new mongoose.Schema({
    name: String,
    value: String,
    dispalyName: String,
    headings: [{
        name: String,
        value: String
    }],
    paragraphs: [{
        name: String,
        value: String
    }],
    images: [{
        name: String,
        value: {
            buffer: { type: Buffer, contentType: String },
            fileName: String,
            fileType: String
        }
    }]
});

const CustomizedPage = mongoose.model("CustomizedPage", CustomizedPageSchema);

module.exports = CustomizedPage;