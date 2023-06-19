import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const authorModel = mongoose.model("Author", AuthorSchema);
export default authorModel;
