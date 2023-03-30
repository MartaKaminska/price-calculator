import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { TableBody } from "@mui/material";

import { RootState } from "../../store/store";
import { StyledTableCell, StyledTableRow } from "../../style";

const TBody = () => {
  const productsList = useSelector((state: RootState) => state.services);

  return (
    <TableBody>
      {productsList.map((row) => (
        <StyledTableRow key={row.id}>
          <StyledTableCell component="th" scope="row">
            {row.name}
          </StyledTableCell>
          {row.price.map((price) => (
            <StyledTableCell key={nanoid()} align="right">
              {price}
            </StyledTableCell>
          ))}
        </StyledTableRow>
      ))}
    </TableBody>
  );
};

export default TBody;
