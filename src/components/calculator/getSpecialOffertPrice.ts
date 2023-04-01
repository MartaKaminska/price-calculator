import { specialOffert } from "../../data";

export const getSpecialOffertPrice = (
  chosenProduct: string[],
  productsList: Services[],
  yearIndex: number
): number => {
  const isSpecialOffert: boolean = specialOffert.relatedProducts.every((elem) =>
    chosenProduct.includes(elem)
  );
  const specialOffertPrice: number | undefined = isSpecialOffert
    ? productsList.find(
        (product: Services) => product.name === specialOffert.product
      )?.price[yearIndex]
    : 0;

  return specialOffertPrice ? specialOffertPrice : 0;
};
