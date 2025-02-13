import { PrismaClient } from "@prisma/client";

//----------------------------------------------

const prisma = new PrismaClient();

function main() {
  prisma.user.create({
    data: {
      name: "Emilio",
      email: "emilio@gmail.com",
    },
  });
}

main();
