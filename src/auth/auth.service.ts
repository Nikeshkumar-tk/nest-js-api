import { Injectable } from "@nestjs/common";
import { User, Bookmark } from '@prisma/client'
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})
export class Authservice{

    constructor(private prisma:PrismaService){}

    signup(){
        return "Hi successfully signed up"
    }


    signin(){

        return "Hi successfully signed in"
    
    }
}