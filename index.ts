import { Application } from "Oak";

const app = new Application();

app.use(async (context, next) => {
  try {
    await context.send({
      root: `${Deno.cwd()}/examples/static`,
      index: "index.html",
    });
  } catch {
    await next();
  }
});

await app.listen({ port: 8001 });