import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient();
export default defineEventHandler(async(event)=>{
    const body=await readBody(event)
    const user=await prisma.adminsign.create({
        data:{
            name:body.username,
            email:body.useremail,
            password:body.password,
            confirmpassword:body.password,

        }
    })
    return user;


})
