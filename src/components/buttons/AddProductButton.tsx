import { useState } from "react";
import { Button } from "@mui/material";

import { AddProductDialog } from "../dialog/AddProductDialog";

export const AddProductButton = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="text" onClick={() => setOpen(true)}>
        dodaj kolejny produkt
      </Button>
      <AddProductDialog isOpen={open} handleClose={handleClose} />
    </div>
  );
};
