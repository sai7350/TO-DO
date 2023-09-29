
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    // assertMethod(event, 'POST')
    // const body = await readBody(event)
    let cookie = JSON.parse(getCookie(event, 'user'));
    console.log(cookie)
    
    const user = await prisma.tasks.findMany({
        where:{
            Name:cookie
           
        }
        

       
    
      
        
     

    }).then((res)=>{
        if(res)
            return res;
        else
            throw createError({statusCode:500,statusMessage:"No user found"})
    }).catch((err)=>{
        throw err;

    })
    // console.log(user);
    
return user;


   
    
});
