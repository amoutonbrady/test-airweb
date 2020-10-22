import { fastify } from "fastify";
import { PrismaClient } from "@prisma/client";
import cors from "fastify-cors";

const db = new PrismaClient();
const app = fastify();
app.register(cors, {
  origin: true,
});

app.get("/products", async () => {
  return db.categories.findMany({
    include: {
      products: true,
    },
  });
});

app.listen(3000, console.log);
