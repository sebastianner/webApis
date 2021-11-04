import { nanoid } from "nanoid";
import boom from "@hapi/boom";
import store from "../../../store/dummy";
import User from "../../../interfaces/User";
import ReqResponse from "../../../interfaces/ReqResponse";
import Auth from "../auth/controller";
const auth = new Auth();

class Controller {
  async list(table: string): Promise<ReqResponse> {
    const list = await store.list(table);
    if (!list) {
      throw boom.notFound("Product not found");
    }
    return list;
  }

  async insert(body: any): Promise<ReqResponse> {
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
}

export default Controller;
