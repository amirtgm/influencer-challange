import express from 'express';
import {
  createUser,
  deleteUser,
  findUser,
  getUsers,
  updateUser
} from './user.controller';

const router = express.Router();

router.get('/:id', findUser);
router.get('/', getUsers);
router.put('/:id', updateUser);
router.patch('/:id', updateUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);

export default router;
