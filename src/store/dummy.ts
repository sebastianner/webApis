const db: any = {
  user: [
    {
      id: "1",
      name: "sebastian",
      username: "sebastian123",
      email: "sebastian123@gmail.com",
    },
  ],
  auth: [
    {
      id: "1",
      username: "sebastian123",
      email: "sebastian123@gmail.com",
      password: "somepassword",
    },
  ],
};

async function list(table: string): Promise<any> {
  return db[table];
}

async function insert(table: string, user: any) {
  return db[table].push(user);
}

export default { list, insert };
