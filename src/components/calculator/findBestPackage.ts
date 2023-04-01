export const findBestPackage = (
  chosenElements: string[],
  productsList: Services[],
  yearIndex: number
) => {
  let bestPackage: BestPackage = {
    elements: [],
    price: undefined,
  };

  productsList.map((product: Services) => {
    if (product.name.includes("+")) {
      const isInOfert = product.name
        .split(" + ")
        .every((elem) => chosenElements.includes(elem));
      if (isInOfert) {
        if (
          bestPackage.price === undefined ||
          product.price[yearIndex] < bestPackage.price
        ) {
          bestPackage.price = product.price[yearIndex];
          bestPackage.elements = product.name.split(" + ");
        }
      }
    }
  });
  
  return bestPackage;
};
