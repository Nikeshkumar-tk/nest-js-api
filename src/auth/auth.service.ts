import { Injectable } from "@nestjs/common";
import { User, Bookmark } from '@prisma/client'

@Injectable({})
export class Authservice{


    signup(){
        return "Hi successfully signed up"
    }


    signin(){

        return "Hi successfully signed in"
    
    }
}