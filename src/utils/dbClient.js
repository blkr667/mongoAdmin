import fetch from 'isomorphic-fetch';

import usersService from './usersService'
import authService from './authService'
import customizedPagesService from './customizedPagesService'

const dbClient = {
    users: usersService,
    auth: authService,
    customizedPages: customizedPagesService
}


export default dbClient;