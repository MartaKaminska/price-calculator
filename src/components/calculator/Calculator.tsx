import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, CardContent, Typography } from "@mui/material";
import { RootState } from "../../store/store";

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

  const yearIndex = years.indexOf(chosenYear);

  const isPackage = (firstEle: string, secondEle: string): boolean =>
    chosenProduct.includes(firstEle) && chosenProduct.includes(secondEle);

  const checkCost = (element: string): number => {    
    if (chosenProduct.includes(element)) {
        console.log("element: " + element);
        
      const productCost =  productsList.find((product: Services) => {
          return product.name === element})
          ?.price[yearIndex]!;
        return productCost;
    } else return 0;
  };

  const otherProductCost = (): number => {
    const otherProducts: string[] = chosenProduct.filter((product: string) =>
      productsList.slice(6).find((productName) => productName.name === product)
    );
    return otherProducts.reduce(
      (acc: number, cur: string) => acc + checkCost(cur),
      cost
    );
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkPrice = () => {
    if (
      isPackage("Internet", "tv") &&
      isPackage("Abonament telefoniczny", "Internet")
    )
      setCost(
        checkCost("Internet + telewizja") <
          checkCost("Internet + Abonament telefoniczny")
          ? checkCost("Internet + telewizja") +
              checkCost("Abonament telefoniczny") +
              otherProductCost()
          : checkCost("Internet + Abonament telefoniczny") +
              checkCost("Telewizja") +
              otherProductCost()
      );
    else if (isPackage("Internet", "tv"))
      setCost(checkCost("Internet + telewizja") + otherProductCost());
    else if (isPackage("Abonament telefoniczny", "Internet"))
      setCost(
        checkCost("Internet + Abonament telefoniczny") +
          checkCost("Dekoder 4K") +
          otherProductCost()
      );
    else
      setCost(
        checkCost("Telewizja") +
          checkCost("Dekoder 4K") +
          checkCost("Internet") +
          checkCost("Abonament telefoniczny") +
          otherProductCost()
      );
  };

  useEffect(() => checkPrice(), [chosenYear, chosenProduct, checkPrice]);

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
