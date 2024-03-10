import { PrismaClient, UserRole } from "@prisma/client";
import { connect } from "http2";

const prisma = new PrismaClient();

const main = async () => {
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "user2",
  //     email: "user2@gmail.com",
  //     role: UserRole.user,
  //   },
  // });

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "this is bio..",
  //     userId: 1,
  //   },
  // });

  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "software engineering",
  //   },
  // });

  const createPost = await prisma.post.create({
    data: {
      title: "this is title",
      content: "this is content",
      authorId: 1,
      postCategory: {
        create:[
          {
            categoryId:1
          },
          {
            categoryId:3
          }
        ],
      },
    },
    include: {
      postCategory: true,
    },
  });
  console.log(createPost);
};

main();
