import { Module } from '@nestjs/common';

import { NoteModule } from './note/note.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, UserModule, NoteModule, PrismaModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
