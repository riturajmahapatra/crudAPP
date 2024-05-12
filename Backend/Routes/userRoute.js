import express from 'express';
import { create, getAll } from '../Controller/userController.js';

const route = express.Router();

route.post('/create', create);
route.get('/getall', getAll);

export default route;
