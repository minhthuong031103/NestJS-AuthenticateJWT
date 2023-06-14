import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
@Global() //global module
@Module({
  providers: [PrismaService],
  exports: [PrismaService], //others can use this service
})
export class PrismaModule {}
