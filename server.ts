import { Application } from "https://deno.land/x/oak@v5.4.0/mod.ts";
import route from "./src/routes/router.ts";

const app = new Application();
const port = 3000;

app.use(route.routes());
app.use(route.allowedMethods());

console.log(`Server is running: https://localhost:${port}`);

await app.listen({
  port,
});
