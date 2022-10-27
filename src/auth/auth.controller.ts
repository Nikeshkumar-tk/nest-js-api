import { Controller, Post } from "@nestjs/common";
import { Authservice } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authService:Authservice){}
@Post('signup')
signup(){
    return this.authService.signup()
}

@Post('signin')
signin(){

    return this.authService.signin()

}
}