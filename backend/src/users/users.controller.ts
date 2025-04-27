import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtGuard } from '../guards/jwt.guard';
import { Roles } from '../decorators/roles.decorator';
import { RoleGuard } from '../guards/role.guard';
import { LoginUserDto } from './dto/login-user.dtoy';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  //@UseGuards(JwtGuard)
  @Patch()
  updateMe(@Req() req, @Body() updateUserDto: UpdateUserDto) {
    const userId = req.user?.id;
    return this.usersService.update(userId || '', updateUserDto);
  }

  //@UseGuards(JwtGuard,RoleGuard)
  //@Roles('admin')
  @Get('all')
  findAll() {
    return this.usersService.findAll();
  }

  //@UseGuards(JwtGuard,RoleGuard)
  //@Roles('admin')
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  //@UseGuards(JwtGuard,RoleGuard)
  //@Roles('admin')
  @Patch(':id')
  updateById(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  //@UseGuards(JwtGuard,RoleGuard)
  //@Roles('admin')
  @Delete(':id')
  removeById(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
