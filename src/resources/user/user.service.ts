import { sequelize } from '@root/database';
import { Repository } from 'sequelize-typescript';
import { CreateOptions, FindOptions } from 'sequelize/types';
import User from './user.entity';

const repo = sequelize.getRepository(User);
export default class UserService {
  userRepository: Repository<User>;
  constructor() {
    this.userRepository = repo;
  }

  public async findAll(option?: FindOptions<User>): Promise<User[]> {
    return this.userRepository.findAll(option || {});
  }
  public async createUser(data: CreateOptions<User>): Promise<User> {
    return this.userRepository.create(data, {
      returning: true
    });
  }
  public async updateUser(id: number, data: User): Promise<User> {
    const [, [result]] = await this.userRepository.update(data, {
      where: { id },
      returning: true
    });
    return result;
  }
  public async deleteUser(id: number): Promise<number> {
    return this.userRepository.destroy({
      where: {
        id
      }
    });
  }
}
