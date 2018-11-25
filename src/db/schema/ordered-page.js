const {Schema, model} = require('mongoose');
const OrderedPageSchema = new Schema({
    name: String,
    value: String,
    dispalyName: String,
    content: [{
            name: String,
            type: String,
            text: String,
            image: {
                buffer: { type: Buffer, contentType: String },
                fileName: String,
                fileType: String
            }
        }]
});

const OrderedPage = model("OrderedPage", OrderedPageSchema);

module.exports = OrderedPage;