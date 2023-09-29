import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient();

export default defineEventHandler(async(event)=>
{
    const body=await readBody(event)
    const user=await prisma.adminsign.findUnique({
       where:{
        name:body.name
       }

            
        
    }).then((res)=>{
        if(res)
            return res;
        else
            throw createError({statusCode:500,statusMessage:"No user found"})
    }).catch((err)=>{
        throw err;

    })
    console.log(user);
    
return user;
    

})