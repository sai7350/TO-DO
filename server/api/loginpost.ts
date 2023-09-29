import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken';
const prisma = new PrismaClient();
const key='abcd';
const generateToken = (id: number) => {
    //please provide proper env file 'secreat token' instead 'ancdefg'
    return jwt.sign({ userId: id },key, {
        expiresIn: '10h',
    })

}


export default defineEventHandler(async (event) => {
    assertMethod(event, 'POST')
    const body = await readBody(event)

    try{
    const user = await prisma.signup.findUnique({
        where: {
            name: body.name,
            // password:body.userpassword
            
        }
    })
    if (user) {
        let users;
        const token = generateToken(user.Id)
               
        setCookie(event, 'user', JSON.stringify(user.name))
        setCookie(event, 'token', token)
        return { users, token };
        
    }
}
 catch (error) {
    console.log(error)
    return  error ;
}
})