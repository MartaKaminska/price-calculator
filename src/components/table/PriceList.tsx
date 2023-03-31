import { Paper, Table, TableContainer } from "@mui/material";

import TBody from "./TBody";
import THead from "./THead";

export const PriceList = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <THead />
        <TBody />
      </Table>
    </TableContainer>
  );
};
