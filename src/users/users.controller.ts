/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return {
      data: this.usersService.findAll(),
      message: this.usersService.getMessage(),
    };
  }

  @Get('employees')
  findEmployee() {
    return this.usersService.findEmployee();
  }

  @Get('makanan/food')
  findMakanan() {
    return this.usersService.findMakanan();
  }

  @Get('profile')
  getProfile() {
    return this.usersService.getProfile();
  }

  @Get('search')
  findQuery(
    @Query('nama') nama: string,
    @Query('umur', ParseIntPipe) umur: number,
  ) {
    return {
      nama: nama,
      umur: umur,
      type: typeof umur,
    };
  }

  @Get('search2')
  findQuery2(@Query() query: any) {
    return {
      query,
    };
  }

  @Get(':id')
  findUserById(@Param('id') id: string) {
    return {
      id,
    };
  }

  // @Post()
  // createUser(@Body() body: any) {
  //   return body;
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return {
      id,
      body,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      message: `User dengan id ${id} berhasil dihapus`,
    };
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return createUserDto;
  }
}
