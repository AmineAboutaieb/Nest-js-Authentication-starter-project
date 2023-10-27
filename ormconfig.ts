import { User } from 'src/users/entities/user.entity';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const config: MysqlConnectionOptions = {
  type: 'mysql',
  database: 'nest_rest_auth_db_01',
  host: 'localhost',
  port: 3306,
  username: 'amine',
  password: '123.pol',
  entities: [User],
  synchronize: true,
};

export default config;
