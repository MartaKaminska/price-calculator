import { Box } from "@mui/material";
import { ChoseProduct } from "./ChoseProduct";
import { ChoseYear } from "./ChoseYear";

export const Offer = () => {
  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <ChoseYear />
      <ChoseProduct />
    </Box>
  );
};
