import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

// creating first app 
// lets you insert data into user table


async function createUser (username:string , password:string , firstName:string , lastName:string) {
    const newUser = await prisma.user.create({
        data:{
            username,
            password,
            firstName,
            lastName 
        },
    })

    return newUser;
}

async function updateUser (id:number , username:string, password:string ) {
    const newUser = await prisma.user.update({
        where:{
            id
        },
        data:{
            username,
            password,
             
        },
    })

    return newUser;
}
async function Delete (id:number ) {
    const newUser = await prisma.user.delete({
        where:{
            id
        },
        
    })
     
}

async function allUsers() {

    const allofthem = await prisma.user.findMany();
    return allofthem; 
    
}

export {
    createUser ,  
    updateUser , 
    Delete , 
    allUsers
}



 

