import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(
    firstname: string,
    lastname: string,
    username: string,
    pass: string,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(pass, 10);
    const newUser: User = {
      id: null,
      firstname: firstname,
      lastname: lastname,
      username: username,
      password: hashedPassword,
      verified: false,
    };

    const registerResponse = await this.userRepository.save(newUser);

    return registerResponse;
  }

  async findOne(username: string): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { username: username } });
  }
}
