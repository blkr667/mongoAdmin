import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers/index';
import { StaticRouter } from 'react-router';
import Html from '../components/Html';
import App from '../components/App';
import addAuthRoutes from './routes/auth-routes'
import addUsersRoutes from './routes/user-routes'
import addCustomizedPageRoutes from './routes/customized-page-routes'


const app = express();

app.use(express.static(path.join(__dirname)));

mongoose.connect("mongodb://localhost/mango");
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
    console.log("we're connected!");
});

app.use(require('express-session')({
    secret: "Crystal is something",
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

addAuthRoutes(app);
addUsersRoutes(app);
addCustomizedPageRoutes(app);

app.use(async (req, res) => {
    const scripts = ['vendor.js', 'client.js'];

    const initialState = {
        initialText: "rendered on the server",
        authenticated: req.isAuthenticated()
    };
    const context = {};

    const store = createStore(reducers, initialState);

    const appMarkup = ReactDOMServer.renderToString((
        <StaticRouter location={req.url} context={context}>
            <Provider store={store}>
                <App />
            </Provider>
        </StaticRouter>
    ));
    const html = ReactDOMServer.renderToStaticMarkup(<Html children={appMarkup} scripts={scripts} initialState={initialState} />);

    res.send(`<!doctype html>${html}`);
});

app.listen(3000, () => console.log('Listening on localhost:3000'));
