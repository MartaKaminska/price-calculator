import { useSelector } from "react-redux";
import { TableBody } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

import { RootState } from "../../store/store";
import { StyledTableCell, StyledTableRow } from "../../style";

const TBody = () => {
  const productsList = useSelector((state: RootState) => state.services);

  return (
    <TableBody>
      {productsList.map((row) => (
        <StyledTableRow key={uuidv4()}>
          <StyledTableCell component="th" scope="row">
            {row.name}
          </StyledTableCell>
          {row.price.map((price) => (
            <StyledTableCell key={uuidv4()} align="right">
              {price}
            </StyledTableCell>
          ))}
        </StyledTableRow>
      ))}
    </TableBody>
  );
};

export default TBody;
