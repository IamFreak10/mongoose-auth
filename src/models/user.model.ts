import { model, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  age?: number;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, default: 18 },
  },
  { timestamps: true }
);

export const User = model<IUser>('User', userSchema);
