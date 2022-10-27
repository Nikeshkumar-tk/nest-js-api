import { Body, Controller, Post } from "@nestjs/common";
import { Authservice } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authService:Authservice){}
@Post('signup')
signup(@Body() dto:any){
    console.log(dto)
    return this.authService.signup()
}

@Post('signin')
signin(){

    return this.authService.signin()

}
}