import { useSelector } from "react-redux";
import { TableHead, TableRow } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

import { RootState } from "../../store/store";
import { StyledTableCell } from "../../style";

const THead = () => {
  const years = useSelector((state: RootState) => state.years);

  return (
    <TableHead>
      <TableRow>
        <StyledTableCell>PRODUKTY</StyledTableCell>
        {years.map((year) => (
          <StyledTableCell key={uuidv4()} align="right">
            {year}
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default THead;
