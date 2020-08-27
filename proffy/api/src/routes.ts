import express from 'express';

import UsersController from './controllers/UsersController'
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const usersController = new UsersController;
const classesController = new ClassesController;
const connectionsController = new ConnectionsController;

routes.post('/users', usersController.create);
routes.post('/login', usersController.login);

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes;