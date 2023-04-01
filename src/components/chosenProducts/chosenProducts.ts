export const chosenProducts = (addedProducts: Services) =>
  Object.entries(addedProducts)
    .filter(([, value]) => value === true)
    .map(([key]) => {
      if (key === "decoder") return "Dekoder 4K";
      if (key === "tv") return "Telewizja";
      return key;
    });
