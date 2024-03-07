import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();

const main =async()=>{

    // findAll
const getallFormDb=await prisma.post.findMany({})

const findFirst = await prisma.post.findFirstOrThrow({
    where:{
        published:false
    }
});

const findUnique=await prisma.post.findUniqueOrThrow({
    where:{
        id:17
    },
    select:{
        title:true,
        content:true
    }
})
console.log({findUnique});
}
main();