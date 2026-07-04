import { IUser } from './user.interface';
import { User } from './user.model';

const createUser = async (payload: IUser) => {
  const res = await User.create(payload);
  return res;
};
export const userService = {
  createUser,
};
