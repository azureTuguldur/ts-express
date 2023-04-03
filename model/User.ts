import { Schema, model } from "mongoose";

interface IUser {
  name: string;
  email: string;
  avatar?: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: { type: String },
});

const user = model("User", userSchema);

exports.default = user;
