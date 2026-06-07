import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      query,
    };
  }

  @Get(':id')
  findUserById(@Param('id') id: string) {
    return {
      id,
    };
  }
}
