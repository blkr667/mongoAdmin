import fetch from 'isomorphic-fetch';

const customizedPagesService = {
    fetchList(cb) {
        fetch("http://localhost:3000/customizedPages")
            .then(res => res.json())
            .then(res => {
                cb(res);
            });
    },
    fetch(name, cb) {
        fetch("http://localhost:3000/customizedPages/" + name )
            .then(res => res.json())
            .then(res => {
                cb(res);
            });
    },
    delete(id, cb) {
        fetch("http://localhost:3000/customizedPages/" + id,
            {method: 'DELETE'})
            .then(res => res.json())
            .then(res => {
                cb(res);
            });
    },
    create(customizedPage, cb) {
        fetch("http://localhost:3000/customizedPages",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(customizedPage)
            })
            .then(res => res.json())
            .then(res => {
                cb(res);
            });
    },
    edit(customizedPage, cb) {
        fetch("http://localhost:3000/customizedPages/",
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(customizedPage)
            })
            .then(res => res.json())
            .then(res => {
                cb(res);
            });
    },
    addHeading(pageId, newHeading, cb) {
        fetch("http://localhost:3000/customizedPages/heading/" + pageId,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newHeading)
            })
            .then(res => res.json())
            .then(res => {
                cb(res);
            });
    },
    deleteHeading(pageId, heading, cb) {
        fetch("http://localhost:3000/customizedPages/heading/" + pageId,
            {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(heading)
            })
            .then(res => res.json())
            .then(res => {
                cb(res);
            });
    },
    editHeading(pageId, heading, cb) {
        fetch("http://localhost:3000/customizedPages/heading/" + pageId,
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(heading)
            })
            .then(res => res.json())
            .then(res => {
                cb(res);
            });
    },
    addParagraph(pageId, paragraph, cb) {
        fetch("http://localhost:3000/customizedPages/paragraph/" + pageId,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(paragraph)
            })
            .then(res => res.json())
            .then(res => {
                cb(res);
            });
    },
    deleteParagraph(pageId, paragraph, cb) {
        fetch("http://localhost:3000/customizedPages/paragraph/" + pageId,
            {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(paragraph)
            })
            .then(res => res.json())
            .then(res => {
                cb(res);
            });
    },
    editParagraph(pageId, paragraph, cb) {
        fetch("http://localhost:3000/customizedPages/paragraph/" + pageId,
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(paragraph)
            })
            .then(res => res.json())
            .then(res => {
                cb(res);
            });
    },
    addImage(pageId, imageFormData, cb) {
        fetch("http://localhost:3000/customizedPages/image/" + pageId,
            {
                method: 'POST',
                body: imageFormData
            })
            .then(res => res.json())
            .then(res => {
                cb(res);
            });
    },
    editImage(pageId, imageFormData, cb) {
        fetch("http://localhost:3000/customizedPages/image/" + pageId,
            {
                method: 'PUT',
                body: imageFormData
            })
            .then(res => res.json())
            .then(res => {
                cb(res);
            });
    },
    deleteImage(pageId, image, cb) {
        fetch("http://localhost:3000/customizedPages/image/" + pageId,
            {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(image)
            })
            .then(res => res.json())
            .then(res => {
                cb(res);
            });
    }
};

export default customizedPagesService;