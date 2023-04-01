import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, CardContent, Typography } from "@mui/material";

import { RootState } from "../../store/store";
import { findCost } from "./findCost";

export const Calculator = () => {
  const chosenYear: string = useSelector(
    (state: RootState) => state.chosenYear
  );
  const [cost, setCost] = useState<number>(0);
  const years: string[] = useSelector((state: RootState) => state.years);
  const productsList: Services[] = useSelector(
    (state: RootState) => state.services
  );
  const chosenProduct: string[] = useSelector(
    (state: RootState) => state.chosenProduct
  );
  const yearIndex: number = years.indexOf(chosenYear);

  useEffect(
    () => setCost(findCost(chosenProduct, productsList, yearIndex)),
    [chosenProduct, productsList, yearIndex]
  );

  return (
    <Card>
      <CardContent style={{ display: "flex" }}>
        <Typography variant="h5">
          Za swoje produkty zapłacisz jedynie
        </Typography>
        <Typography
          variant="h5"
          style={{ color: "#1976d2", marginLeft: "30px" }}
        >
          {`${cost} PLN`}
        </Typography>
      </CardContent>
    </Card>
  );
};
