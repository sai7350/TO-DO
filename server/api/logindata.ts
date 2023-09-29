import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken';
const prisma =new PrismaClient();

const key='abcd';
const generateToken = (id: number) => {
    //please provide proper env file 'secreat token' instead 'ancdefg'
    return jwt.sign({ userId: id },key, {
        expiresIn: '10h',
    })

}

export default defineEventHandler(async(event)=>{
    const body=await readBody(event)
    const user= await prisma.login.create({
        data:{
            name:body.name,
            password:body.userpassword
        }
    })

    return user;
})