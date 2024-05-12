import express from 'express';
import {
  create,
  deleteUser,
  getAll,
  update,
} from '../Controller/userController.js';

const route = express.Router();

route.post('/create', create);
route.get('/getall', getAll);
route.put('/update/:id', update);
route.delete('/delete/:id', deleteUser);

export default route;
