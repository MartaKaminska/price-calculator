import { useState } from "react";
import { Button } from "@mui/material";

import { AddProductDialog } from "../dialog/AddProductDialog";

export const AddProductButton = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = (): void => setOpen(false);

  return (
    <div>
      <Button
        variant="outlined"
        style={{ marginTop: "20px" }}
        onClick={() => setOpen(true)}
      >
        dodaj kolejny produkt
      </Button>
      <AddProductDialog isOpen={open} handleClose={handleClose} />
    </div>
  );
};
