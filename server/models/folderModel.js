import mongoose from "mongoose";

const FolderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    authorId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const folderModel = mongoose.model("Folder", FolderSchema);
export default folderModel;