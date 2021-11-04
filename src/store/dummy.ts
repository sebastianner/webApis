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

async function insert(table: string, user: any): Promise<any> {
  return db[table].push(user);
}

async function query(table: string, query: any): Promise<any> {
  let col = await list(table);
  return col.filter((e: any) => e[0] === query[0])[0];
}

export default { list, insert, query };
