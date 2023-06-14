import { Injectable } from '@nestjs/common';

import * as argon from 'argon2';
import { AuthDTO } from './dto/auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {
    console.log('in auth service constructor');
  }

  async register(authDTO: AuthDTO) {
    const hashedPassword = await argon.hash(authDTO.password);
    const user = await this.prismaService.user.create({
      data: {
        //cac truong con lai la bat buoc
        email: authDTO.email,
        hashedPassword: hashedPassword,
        firstName: 'minh',
        lastName: 'thuong',
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
      },
    });
    return {
      user: user,
    };
  }
  login() {
    return {
      message: 'login',
    };
  }
}
