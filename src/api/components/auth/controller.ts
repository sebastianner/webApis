import store from "../../../store/mysql";
import token from "../../../token/index";
import bcrypt from "bcrypt";
import Auth from "../../../interfaces/Auth";
import ReqResponse from "../../../interfaces/ReqResponse";
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
  constructor() {}
  async login(username: string, password: string) {
    const query: any = { username: username };
    const data: any = await store.query(TABLE, query);
    console.log(data);
    const compare: boolean = await bcrypt.compare(password, data.password);
    console.log(compare);
    if (compare) {
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
