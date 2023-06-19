import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    folderId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const noteModel = mongoose.model("Note", NoteSchema);
export default noteModel;
