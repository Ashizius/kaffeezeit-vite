import { PickType } from "@nestjs/mapped-types";
import { IsString, IsNotEmpty, IsNumber } from "class-validator";
import { User } from "../../repository/entities/user.entity";
import { CreateUserDto } from "./create-user.dto";

export class LoginUserDto extends PickType(CreateUserDto,['email','password']){
  //username: string;

}
