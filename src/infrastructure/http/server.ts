// import helloExpress from "@rjaskonis/express-hello-world";
// helloExpress();
// need to declare this as ts module in some *.d.ts file with: declare module "@rjaskonis/express-hello-world";
import path from "path";
import dotenv from "dotenv";
import moduleAlias from "module-alias";

const inProduction = process.env.NODE_ENV !== "development";
const inDevelopment = !inProduction;
const devUI = process.env.DEV_UI === "yes";

dotenv.config();

if (inProduction) moduleAlias();

import express, { Application } from "express";
import compression from "compression";
// import bodyParser from "body-parser";
import favicon from "serve-favicon";
import { authenticationRouter, usuarioRouter } from "@http/routes";
import { InMemoryAdapter } from "@data/adapters/in-memory";

const app: Application = express();
const PORT_NUMBER = process.env.API_PORT_NUMBER;
const PUBLIC_PATH = path.resolve("public");

app.use(compression({ threshold: 0, filter: () => true }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));
app.use(express.json({ limit: "100mb" }));
app.use(express.static(PUBLIC_PATH));
app.use(favicon(path.join("public", "media", "favicon.ico")));
app.use(authenticationRouter);
app.use(usuarioRouter);

app.set("DATABASE_REPOSITORY", new InMemoryAdapter());
app.set("SUPERSECRET_KEY", process.env.SUPERSECRET_KEY || "jb007");

app.listen(PORT_NUMBER, () => console.log(`*Server listening on port ${PORT_NUMBER}*`));
