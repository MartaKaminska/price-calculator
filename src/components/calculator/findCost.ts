import { findBestPackage } from "./findBestPackage";
import { getSpecialOffertPrice } from "./getSpecialOffertPrice";
import { otherCost } from "./outOfPackage";

export const findCost = (
  chosenProduct: string[],
  productsList: Services[],
  yearIndex: number
): number => {
  const bestPackage: BestPackage = findBestPackage(
    chosenProduct,
    productsList,
    yearIndex
  );

  const productsListWithoutPackage = productsList.filter(
    (product: Services) => !product.name.includes("+")
  );

  const cost: number =
    (bestPackage.price
      ? bestPackage.price
      : otherCost(
          productsListWithoutPackage,
          chosenProduct,
          bestPackage.elements,
          yearIndex
        )) - getSpecialOffertPrice(chosenProduct, productsList, yearIndex);

  return cost;
};
