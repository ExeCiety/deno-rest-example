import { Router } from "https://deno.land/x/oak@v5.4.0/mod.ts";
import {
  getAll,
  findOne,
  insertOne,
  updateOne,
  deleteOne,
} from "../controllers/todo.ts";

const route = new Router();

route.get("/", async ({ response }: { response: any }) => {
  response.status = 200;
  response.body = {
    title: "Deno Example Rest Api",
  };
});

// LIST
route.get("/api/v1/tasks", getAll);

// SHOW
route.get("/api/v1/task/:id", findOne);

// ADD
route.post("/api/v1/task", insertOne);

// EDIT
route.put("/api/v1/task/:id", updateOne);

// DELETE
route.delete("/api/v1/task/:id", deleteOne);

export default route;
