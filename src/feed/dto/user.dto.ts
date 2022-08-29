/* eslint-disable prettier/prettier */
// import { IsDefined, IsEmail, IsNumber, IsString } from 'class-validator';

/* eslint-disable prettier/prettier */
export class UserDto {
  // @IsEmail()
  // @IsDefined()
  email: string;

  role_id: string;

  // id: string;

  // @IsDefined()
  // @IsString()
  name: string;

  // @IsDefined()
  // @IsString()
  gender: string;
  // @IsNumber()
  mobile_number: number;
  // @IsDefined()
  // @IsString()
  address: string;

  user_id: number;
}
