import { findBestPackage } from "./findBestPackage";
import { getSpecialOffertPrice } from "./getSpecialOffertPrice";

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
  const otherProducts = chosenProduct.filter(
    (product) => bestPackage.elements.indexOf(product) === -1
  );

  const productsListWithoutPackage = productsList.filter(
    (product: Services) => !product.name.includes("+")
  );

  const otherCost: number = productsListWithoutPackage.reduce(
    (acc: number, cur: any) => {
      if (otherProducts.includes(cur.name)) {
        return acc + cur.price[yearIndex];
      }
      return acc;
    },
    0
  );

  const cost: number =
    otherCost +
    (bestPackage.price || 0) -
    getSpecialOffertPrice(chosenProduct, productsList, yearIndex);

  return cost;
};
