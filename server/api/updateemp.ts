import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export default defineEventHandler(async (event) => {
    const postdata = await readBody(event)

    //    let hashedPassword = await bcrypt.hash(postdata.Password, 10);

    try {

        const Usercreation = await prisma.tasks.update({
            where: {
                Id: postdata.Id,
            },
            data: {
                Name: postdata.username,
                Email: postdata.email,
                Idno: postdata.idno,
                Branch: postdata.branch,
                Task: postdata.task

            },
        });

        return Usercreation;
    } catch (error) {
        return error
    }
})