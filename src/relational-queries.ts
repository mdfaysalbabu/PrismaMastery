import { PrismaClient } from "@prisma/client";
import { inflate } from "zlib";

const prisma=new PrismaClient();

const relationalQueries=async()=>{
//   const result =await prisma.user.findUnique({
//     where:{
//         id:1
//     },
//     include:{
//         post:true
//     }
//   });

const publishedPost = await prisma.user.findMany({
    include:{
       post:{
        where:{
            published:true
        }
       }
    }
})
  console.dir(publishedPost,{depth:Infinity});
}
relationalQueries()