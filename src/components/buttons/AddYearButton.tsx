import { useState } from "react";
import { Button } from "@mui/material";

import { AddYearDialog } from "../dialog/AddYearDialog";

export const AddYearButton = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        dodaj kolejny rok
      </Button>
      <AddYearDialog isOpen={open} handleClose={handleClose} />
    </div>
  );
};
