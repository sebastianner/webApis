import store from "../../../store/dummy";
// import token from "../../../token/index";
import bcrypt from "bcrypt";
import Auth from "../../../interfaces/Auth";
import ReqResponse from "../../../interfaces/ReqResponse";
const TABLE = "auth";

// async function login(username: string, password: string) {
//   const data: any = await store.query(TABLE, { username: username });
//   console.log(data);
//   const compare = await bcrypt.compare(password, data.password);
//   console.log(compare);
//   if (compare) {
//     return token.sign(data);
//   } else {
//     throw new Error("Invalid information");
//   }
// }

async function insert(body: Auth): Promise<ReqResponse> {
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

export default { insert };
