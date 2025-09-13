import { Hono } from "hono";
import { auth } from "./utils/auth";
import type { AuthType } from "./utils/auth";

const app = new Hono<{Bindings: AuthType }>();

app.get("/", (c) =>{
    return c.html("<h1>Hello from Auth Service</h1>");
});


app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));


export default app;