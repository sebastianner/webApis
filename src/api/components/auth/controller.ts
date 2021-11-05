import store from "../../../store/mysql";
import token from "../../../token/index";
import bcrypt from "bcrypt";
import Auth from "../../../interfaces/Auth";
import boom from "@hapi/boom";
const TABLE = "auth";

// async function update(data: data) {
//   const authData = {
//     id: data.id,
//     username: "",
//     password: "",
//   };

//   if (data.username) {
//     authData.username = data.username;
//   }
//   if (data.password) {
//     authData.password = await bcrypt.hash(data.password, 5);
//   }

//   return store.update(TABLE, authData);
// }

class Controller {
  async login(
    password: string,
    username?: string | undefined,
    email?: string | undefined
  ) {
    let query: any;

    if (username === undefined && email === undefined) {
      throw boom.badRequest("username or email required to login");
    }
    if (username) {
      query = { username: username };
    }
    if (email) {
      query = { email: email };
    }

    const data: any = await store.query(TABLE, query);
    console.log(data);

    const compare: boolean = await bcrypt.compare(password, data.password);
    if (compare) {
      console.log(data);
      return token.sign(data);
    } else {
      throw new Error("Invalid information");
    }
  }

  async insert(body: Auth): Promise<unknown> {
    const authData = {
      user_id: body.user_id,
      username: body.username,
      email: body.email,
      password: "",
    };

    if (body.password) {
      authData.password = await bcrypt.hash(body.password, 5);
    }

    return store.insert(TABLE, authData);
  }
}

export default Controller;
