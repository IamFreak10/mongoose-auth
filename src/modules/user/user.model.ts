import { model, Schema } from 'mongoose';
import { IUser } from './user.interface';

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, default: 18 },
  },
  { timestamps: true }
);

export const User = model<IUser>('User', userSchema);
