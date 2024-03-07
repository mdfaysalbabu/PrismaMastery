import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where:{
  //         id:6
  //     },
  //     data:{
  //         title:"Title 4",
  //         content:"Content 4",
  //         author:"Author 4"
  //     }
  //   })
  // const updateMany = await prisma.post.updateMany({
  //     where:{
  //          title:"Title 2"
  //     },
  //     data:{
  //        published:true
  //     }
  // })
  //   console.log(updateMany);

  const upsertdata = await prisma.post.upsert({
    where: {
      id: 17,
    },
    update: {
      author: "tube",
    },
    create: {
      title: "Title 2",
      content: "Content 2",
    },
  });
  console.log(upsertdata);
};

updates();
