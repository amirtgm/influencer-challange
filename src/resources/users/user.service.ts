// import { Sequelize,  } from "sequelize-typescript";
import { sequelize } from '@root/database';
import { Repository } from 'sequelize-typescript';
import { FindOptions } from 'sequelize/types';
import User from './user.entity';

const repo = sequelize.getRepository(User);
export default class UserService {
  userRepository: Repository<User>;
  constructor() {
    this.userRepository = repo;
  }

  public async findAll(option?: FindOptions<User>): Promise<User[]> {
    return await this.userRepository.findAll(option || {});
  }
}
