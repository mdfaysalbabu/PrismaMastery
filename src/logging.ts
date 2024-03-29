import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (e) => {
  console.log("query:", e.query);
  console.log("Duration:", e.duration,"ms");
  console.log("Date &  time:", e.timestamp);
});

const main = async () => {
  const getallFormDb = await prisma.post.findMany({});
  //   console.log(getallFormDb);
};
main();
