import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const postdata = await readBody(event)
    
    
    try {

        const Usercreation = await prisma.tasks.delete({
            where: {
                Id:postdata.Id
            },
        });
        return Usercreation;
    } catch (error) {
        return error
    }
})