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
import routes from "@http/routes";

const app: Application = express();
const PORT_NUMBER = process.env.API_PORT_NUMBER;
const PUBLIC_PATH = path.resolve("public");

app.use(express.static(PUBLIC_PATH));

app.use(routes);

app.listen(PORT_NUMBER, () => console.log(`*Server listening on port ${PORT_NUMBER}*`));
