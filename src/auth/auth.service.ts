import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(
    firstname: string,
    lastname: string,
    username: string,
    pass: string,
  ): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user) {
      throw new ConflictException('This username is already in use');
    }
    const register = await this.usersService.createUser(
      firstname,
      lastname,
      username,
      pass,
    );

    return register;
  }

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (!user) {
      throw new UnauthorizedException('Email is incorrect');
    }

    if (!bcrypt.compareSync(pass, user.password)) {
      throw new UnauthorizedException('Password is incorrect');
    }
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
