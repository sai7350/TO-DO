import { PrismaClient } from "@prisma/client";
const prisma =new PrismaClient();

export default defineEventHandler(async(event)=>{
    // const body =readBody(event);
    // let cookie = JSON.parse(getCookie(event, 'user'));
    const user=await prisma.signup.findMany({
        
           
        

    })   
    if(user)
    {
        return user;
    }   
    
})