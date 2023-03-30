import {
  Paper,
  Table,
  TableContainer,
} from "@mui/material";

import TBody from "./TBody";
import THead from "./THead";

const PriceList = () => {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <THead />
        <TBody />
      </Table>
    </TableContainer>
  );
};

export default PriceList;
