import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({
    message: 'Nama wajib diisi',
  })
  name: string;

  @IsEmail(
    {},
    {
      message: 'Format email tidak valid',
    },
  )
  email: string;

  @MinLength(8, {
    message: 'Password minimal 8 karakter',
  })
  password: string;
}
