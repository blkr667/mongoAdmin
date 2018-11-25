import CustomizedPage from '../../db/schema/customized-page';

const CUSTOMIZED_PAGE_ROUTE = "/customizedPages";
const CUSTOMIZED_PAGE_NAME_ROUTE = "/customizedPages/:name";
const CUSTOMIZED_PAGE_ID_ROUTE = "/customizedPages/:id";
const CUSTOMIZED_PAGE_HEADING_ID_ROUTE = "/customizedPages/heading/:id";
const CUSTOMIZED_PAGE_PARAGRAPH_ID_ROUTE = "/customizedPages/paragraph/:id";
const CUSTOMIZED_PAGE_IMAGE_ID_ROUTE = "/customizedPages/image/:id";

import multer from 'multer';
const upload = multer({ dest: 'uploads/' });

function addCustomizedPageRoutes(app) {

    /*
     * Customzied Page CRUD
     */

    app.get(CUSTOMIZED_PAGE_ROUTE, function(req, res){
        CustomizedPage.find({}, function(err, customizedPage) {
            res.send(customizedPage);
        });
    });

    app.get(CUSTOMIZED_PAGE_NAME_ROUTE, function(req, res){
        CustomizedPage.findOne({name: req.params.name}, function(err, customizedPage) {
            res.send(customizedPage);
        });
    });

    app.post(CUSTOMIZED_PAGE_ROUTE, function(req, res){
        const newCustomizedPage = new CustomizedPage(req.body);
        newCustomizedPage.save(function (err, newCustomizedPage) {
            if (err) return console.error(err);
            res.send(newCustomizedPage);
        });
    });

    app.delete(CUSTOMIZED_PAGE_ID_ROUTE, function(req, res){
        CustomizedPage.findOne({_id: req.params.id}, function(err, foundPage) {
            if(foundPage) {
                foundPage.remove();
                res.send(foundPage);
            }
        });
    });

    app.put(CUSTOMIZED_PAGE_ROUTE, function(req, res){
        CustomizedPage.findOneAndUpdate(
            {_id: req.body._id},
            req.body,
            {upsert:true},
            function(err, page) {
                if (err) return res.send(500, { error: err });
                return res.send(page);
            }
        );
    });

    /*
     * Headings - Customzied Page CRUD
     */

    app.post(CUSTOMIZED_PAGE_HEADING_ID_ROUTE, function(req, res){
        CustomizedPage.findOne({_id: req.params.id}, function(err, foundPage) {
            if(foundPage) {
                if(!foundPage.headings)
                    foundPage.headings = [];
                foundPage.headings.push(req.body);
                foundPage.save();
                res.send(foundPage);
            }
        });
    });

    app.put(CUSTOMIZED_PAGE_HEADING_ID_ROUTE, function(req, res){
        CustomizedPage.findOne({_id: req.params.id}, function(err, foundPage) {
            if(foundPage && foundPage.headings) {
                const index = foundPage.headings.findIndex(heading => heading.name === req.body.name);
                foundPage.headings[index].value = req.body.value;
                foundPage.save();
                res.send(foundPage);
            }
        });
    });

    app.delete(CUSTOMIZED_PAGE_HEADING_ID_ROUTE, function(req, res){
        CustomizedPage.findOne({_id: req.params.id}, function(err, foundPage) {
            if(foundPage && foundPage.headings) {
                const filteredHeadings = foundPage.headings.filter(heading => heading.name !== req.body.name);
                foundPage.headings = filteredHeadings;
                foundPage.save();
                res.send(foundPage);
            }
        });
    });

    /*
     * PArgraphs - Customized Page CRUD
     */

    app.post(CUSTOMIZED_PAGE_PARAGRAPH_ID_ROUTE, function(req, res){
        CustomizedPage.findOne({_id: req.params.id}, function(err, foundPage) {
            if(foundPage) {
                if(!foundPage.paragraphs)
                    foundPage.paragraphs = [];
                foundPage.paragraphs.push(req.body);
                foundPage.save();
                res.send(foundPage);
            }
        });
    });

    app.put(CUSTOMIZED_PAGE_PARAGRAPH_ID_ROUTE, function(req, res){
        CustomizedPage.findOne({_id: req.params.id}, function(err, foundPage) {
            if(foundPage && foundPage.paragraphs) {
                const index = foundPage.paragraphs.findIndex(heading => heading.name === req.body.name);
                foundPage.paragraphs[index].value = req.body.value;
                foundPage.save();
                res.send(foundPage);
            }
        });
    });

    app.delete(CUSTOMIZED_PAGE_PARAGRAPH_ID_ROUTE, function(req, res){
        CustomizedPage.findOne({_id: req.params.id}, function(err, foundPage) {
            if(foundPage && foundPage.paragraphs) {
                const filteredParagraphs = foundPage.paragraphs.filter(heading => heading.name !== req.body.name);
                foundPage.paragraphs = filteredParagraphs;
                foundPage.save();
                res.send(foundPage);
            }
        });
    });

    /*
     * Images - Customzied Page CRUD
     */

    app.post(CUSTOMIZED_PAGE_IMAGE_ID_ROUTE, upload.single('value'), function(req, res){
        CustomizedPage.findOne({_id: req.params.id}, function(err, foundPage) {
            if(foundPage) {
                if(!foundPage.images)
                    foundPage.images = [];
                const {name, base64image, fileName, fileType} = req.body;
                foundPage.images.push({
                    name,
                    value: {
                        buffer: Buffer.from(base64image, 'base64'),
                        fileName,
                        fileType
                    }
                });
                foundPage.save();
                res.send({status: 200});
            }
        });
    });
    app.put(CUSTOMIZED_PAGE_IMAGE_ID_ROUTE, upload.single('value'), function(req, res){
        CustomizedPage.findOne({_id: req.params.id}, function(err, foundPage) {
            if(foundPage && foundPage.images) {
                const {name, base64image, fileName, fileType} = req.body;
                const index = foundPage.images.findIndex(image => image.name === name);
                foundPage.images[index].value = {
                    buffer: Buffer.from(base64image, 'base64'),
                    fileName,
                    fileType
                };
                foundPage.save();
                res.send({status: 200});
            }
        });
    });
    app.delete(CUSTOMIZED_PAGE_IMAGE_ID_ROUTE, function(req, res){
        CustomizedPage.findOne({_id: req.params.id}, function(err, foundPage) {
            if(foundPage && foundPage.images) {
                const filteredImages = foundPage.images.filter(image => image.name !== req.body.name);
                foundPage.images = filteredImages;
                foundPage.save();
                res.send(foundPage);
            }
        });
    });
}


export default addCustomizedPageRoutes;