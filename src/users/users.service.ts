import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll() {
    return [
      {
        id: 1,
        name: 'Dimas',
      },
      {
        id: 2,
        name: 'Budi',
      },
    ];
  }

  findEmployee() {
    return [
      {
        id: 1,
        name: 'Dimas',
        position: 'Software Engineer',
      },
      {
        id: 2,
        name: 'Budi',
        position: 'Product Manager',
      },
      {
        id: 3,
        name: 'Andi',
        position: 'Designer',
      },
      {
        id: 4,
        name: 'Citra',
        position: 'Marketing Specialist',
      },
    ];
  }

  findMakanan() {
    return [
      {
        id: 1,
        name: 'Nasi Goreng',
      },
      {
        id: 2,
        name: 'Mie Goreng',
      },
      {
        id: 3,
        name: 'Sate',
      },
      {
        id: 4,
        name: 'Gado-Gado',
      },
      {
        id: 5,
        name: 'Nasi Padang',
      },
      {
        id: 6,
        name: 'Rawon',
      },
    ];
  }

  getProfile() {
    return {
      name: 'Dimas',
      age: 25,
      email: 'dimas@example.com',
      role: 'Software Engineer',
    };
  }
}
