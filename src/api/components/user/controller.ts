import { Request } from "express";
import { nanoid } from "nanoid";
import store from "../../../store/dummy";
import User from "../../../interfaces/User";
import ReqResponse from "../../../interfaces/ReqResponse";
import auth from "../auth/controller";

async function list(table: string): Promise<ReqResponse> {
  return store.list(table);
}

async function insert(body: any): Promise<ReqResponse> {
  const newUser: User = {
    id: nanoid(),
    name: body.name,
    username: body.username,
    email: body.email,
  };

  if (body.password) {
    await auth.insert({
      user_id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      password: body.password,
    });
  }

  return store.insert("user", newUser);
}

export default { list, insert };
