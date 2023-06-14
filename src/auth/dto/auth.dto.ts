import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
//define type for authenticate request
export class AuthDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
