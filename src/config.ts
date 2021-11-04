import Config from "./interfaces/Config";

const config: Config = {
  api: {
    port: process.env.PORT || 3000,
    user: {
      version: process.env.USER_VERSION || "v1",
    },
    auth: {
      version: process.env.AUTH_VERSION || "v1",
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET || "notasecret",
  },
  mysql: {
    host: "remotemysql.com",
    user: "KsVkPJbFNs",
    password: "vUvXPjzhOo",
    database: "KsVkPJbFNs",
  },
};

export default config;
