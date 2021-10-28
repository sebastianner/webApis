interface ReqResponse {
  error: boolean | unknown | null;
  status: number;
  body?: BodyEntity[] | boolean | null;
}
interface BodyEntity {
  id: string;
  name: string;
  username: string;
  email: string;
}

export default ReqResponse;
