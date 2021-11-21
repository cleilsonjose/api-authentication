import { type } from "os";

type User = {
  uuid: string;
  userName: string;
  password?: string;
}

export default User;