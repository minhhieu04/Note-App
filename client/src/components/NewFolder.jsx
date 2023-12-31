import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { CreateNewFolderOutlined } from "@mui/icons-material";
import { useSearchParams, useNavigate } from "react-router-dom";

import { addNewFolder } from "../utils/folderUtils";

export default function NewFolder() {
  const [newFolderName, setNewFolderName] = useState();
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const popupName = searchParams.get("popup");

  const handleOpenPopup = () => {
    // setOpen(true);
    setSearchParams({ popup: "add-folder" });
  };
  const handleClose = () => {
    // setOpen(false);
    setNewFolderName("");
    navigate(-1);
  };
  const handleNewFolderNameChange = (e) => {
    setNewFolderName(e.target.value);
  };

  const handleAddNewFolder = async () => {
    const { addFolder } = await addNewFolder({ name: newFolderName });

    handleClose();
  };

  useEffect(() => {
    console.log({ popupName });
    if (popupName === "add-folder") {
      setOpen(true);
      return;
    }

    setOpen(false);
  }, [popupName]);

  return (
    <div>
      <Tooltip title="Thêm thư mục" onClick={handleOpenPopup}>
        <IconButton size="small">
          <CreateNewFolderOutlined sx={{ color: "white" }} />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Thêm thư mục</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tên thư mục"
            fullWidth
            size="small"
            variant="standard"
            sx={{ width: "400px" }}
            autoComplete="off"
            value={newFolderName}
            onChange={handleNewFolderNameChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cen sồ</Button>
          <Button onClick={handleAddNewFolder}>OKue</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
