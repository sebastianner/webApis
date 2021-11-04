import { Request } from "express";
import jwt from "jsonwebtoken";
import config from "../config";

function sign(data: any) {
  return jwt.sign(data, config.jwt.secret);
}

export default { sign };
