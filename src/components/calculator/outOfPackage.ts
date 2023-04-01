const otherProducts = (
  chosenProduct: string[],
  packageElements: string[]
): string[] =>
  chosenProduct.filter((product) => packageElements.indexOf(product) === -1);

export const otherCost = (
  productsList: Services[],
  chosenProduct: string[],
  packageElements: string[],
  yearIndex: number
): number =>
  productsList.reduce((acc: number, cur: any) => {
    if (otherProducts(chosenProduct, packageElements).includes(cur.name)) {
      return acc + cur.price[yearIndex];
    }
    return acc;
  }, 0);
