import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { Authservice } from "./auth.service";



@Module({
    controllers:[AuthController],
    providers:[Authservice]
})
export class AuthModule {}