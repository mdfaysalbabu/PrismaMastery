import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async()=>{

    const offsetData = await prisma.post.findMany({
        skip:2,
        take:2
    })

    // console.log(offsetData);
// cursor based pagination
    const cursorData = await prisma.post.findMany({
        skip:2,
        take:2,
        cursor:{
            id:13
        }
    })

    // console.log(cursorData);
    // sorting

    const sortedData= await prisma.post.findMany({
        orderBy:{
            id:"desc"
        },
        where:{
            title:"Title 1"
        }
    })
    console.log(sortedData);
}

paginationSorting();