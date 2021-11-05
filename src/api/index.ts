import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import config from "../config";
import user from "./components/user/network";
import auth from "./components/auth/network";
import errorHandler from "../middlewares/errorHandler";
import boomHandler from "../middlewares/boomError";
const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const whiteList: string[] = ["http://localhost:3000", "http://localhost:3001"];
const corsOptions: CorsOptions = {
  origin: (origin: any, callback: any): void => {
    if (whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors());

app.use("/api/" + config.api.user.version, user);
app.use("/api/" + config.api.auth.version, auth);
app.use(boomHandler);
app.use(errorHandler);

app.listen(config.api.port, (): void => {
  console.log("listening in port", config.api.port);
});
