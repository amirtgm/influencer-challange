// import { Sequelize,  } from "sequelize-typescript";
import { sequelize } from '@root/database';
import { Repository } from 'sequelize-typescript';
import { CreateOptions, FindOptions } from 'sequelize/types';
import { resourceLimits } from 'worker_threads';
import Product from './product.entity';

const repo = sequelize.getRepository(Product);
export default class ProductService {
  productRepository: Repository<Product>;
  constructor() {
    this.productRepository = repo;
  }

  public async findAll(option?: FindOptions<Product>): Promise<Product[]> {
    return this.productRepository.findAll(option || {});
  }
  public async createProduct(data: CreateOptions<Product>): Promise<Product> {
    return this.productRepository.create(data, {
      returning: true
    });
  }
  public async updateOrInsert(data: Product): Promise<[Product, boolean]> {
    const result = await this.productRepository.findOrCreate({
      where: {
        id: data.id
      },
      defaults: {
        ...data
      }
    });
    console.log(result);
    return result;
  }

  public async updateProduct(id: number, data: Product): Promise<Product> {
    const [rows, [result]] = await this.productRepository.update(data, {
      where: { id },
      returning: true
    });
    return result;
  }
  public async deleteProduct(id: number): Promise<number> {
    return this.productRepository.destroy({
      where: {
        id
      }
    });
  }
}
