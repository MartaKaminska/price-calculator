import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { TableHead, TableRow } from "@mui/material";

import { RootState } from "../../store/store";
import { StyledTableCell } from "../../style";

const THead = () => {
  const years = useSelector((state: RootState) => state.years);

  return (
    <TableHead>
      <TableRow>
        <StyledTableCell>PRODUKTY</StyledTableCell>
        {years.map((year) => (
          <StyledTableCell key={nanoid()} align="right">
            {year}
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default THead;
