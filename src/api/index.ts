import express, { Application } from "express";
import config from "../config";
import user from "./components/user/network";
// import auth from "./components/auth/network"
const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", user);
// app.use("api/auth", auth);

app.listen(config.port, (): void => {
  console.log("listening in port", config.port);
});
