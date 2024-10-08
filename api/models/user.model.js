import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOfvl8FFCBmq28XS731Nd-apOC_LlBOOBTqw&s",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
