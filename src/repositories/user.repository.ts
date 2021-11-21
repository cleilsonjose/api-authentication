import User from "../models.ts/user.model";

class UserRepository{
  findAllUsers(): User[]{
    return[];
  }
}

export default new UserRepository();