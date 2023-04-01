import { otherCost } from "./outOfPackage";

export const findBestPackage = (
  chosenProduct: string[],
  productsList: Services[],
  yearIndex: number
) => {
  let bestPackage: BestPackage = {
    elements: [],
    price: undefined,
  };

  productsList.map((product: Services) => {
    if (product.name.includes("+")) {
      const packageElements: string[] = product.name.split(" + ");
      const isInOfert = packageElements.every((elem) =>
        chosenProduct.includes(elem)
      );

      if (isInOfert) {
        const totalCost =
          product.price[yearIndex] +
          otherCost(productsList, chosenProduct, packageElements, yearIndex);
        if (
          (bestPackage.price && totalCost < bestPackage.price) ||
          bestPackage.price === undefined
        ) {
          bestPackage.price = totalCost;
          bestPackage.elements = product.name.split(" + ");
        }
      }
    }
  });

  return bestPackage;
};
