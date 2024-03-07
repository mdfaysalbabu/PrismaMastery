import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();

const main =async()=>{
//    const result = await prisma.post.create({
//     data:{
//         title:"this is title",
//         content:"this is content",
//         author:"Faysal",

//     }
//    })
//    console.log(result);
const getallFormDb=await prisma.post.findMany({})
console.log(getallFormDb);
}
main();