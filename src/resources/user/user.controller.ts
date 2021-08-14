import express, { Response, Request } from 'express';
import User from './user.entity';
import UserService from './user.service';

const userService = new UserService();
export const getUsers = async (req: Request, res: Response): Promise<any> => {
  const users = await userService.findAll();
  return res.status(200).send(users);
};
export const findUser = async (req: Request, res: Response): Promise<any> => {
  const users = await userService.findAll({
    where: {
      id: req.params.id
    }
  });
  console.log(users);
  return res.status(200).send(users[0]);
};

export const createUser = async (req: Request, res: Response): Promise<any> => {
  const data = req.body;
  const users = await userService.createUser(data);
  return res.status(200).send(users);
};

export const updateUser = async (req: Request, res: Response): Promise<any> => {
  const data = req.body;
  const { id } = req.params;
  const users = await userService.updateUser(parseInt(id), data);
  return res.status(200).send(users);
};

export const deleteUser = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;
  const users = await userService.deleteUser(parseInt(id));
  return res.status(200).send(users);
};
