interface Config {
  api: Api;
  jwt: Jwt;
  mysql: Mysql;
}
interface Api {
  port: number | string;
  user: User;
  auth: Auth;
}

interface User {
  version: string;
}

interface Auth {
  version: string;
}

interface Jwt {
  secret: string;
}

interface Mysql {
  host: string;
  user: string;
  password: string;
  database: string;
}

export default Config;
