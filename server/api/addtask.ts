import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient();

export default defineEventHandler(async(event)=>
{
    const body=await readBody(event)
    // console.log(body)
    const user=await prisma.tasks.create({
        data:{
            Name:body.name,
            Email:body.useremail,
            Idno:body.idno,
            Branch:body.branch,
            Task:body.task,


        }
    })
    return user;

})