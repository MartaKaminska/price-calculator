import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";

import { addChosenProduct, RootState } from "../../store/store";
import { relatedProducts } from "../../data";
import { chosenProducts } from "./chosenProducts";

export const ChoseProduct = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state: RootState) => state.services).filter(
    (product: Services) =>
      !product.name.includes("+") && !relatedProducts.includes(product.name)
  );
  const chosenYear: string = useSelector(
    (state: RootState) => state.chosenYear
  );
  const [state, setState] = useState({
    tv: false,
    decoder: false,
    addedProducts: {},
    ...productsList.reduce((acc: any, curr: any) => {
      acc[curr.name] = false;
      return acc;
    }, {}),
  });
  const { tv, decoder } = state;

  useEffect(() => {
    dispatch(
      addChosenProduct({ products: chosenProducts(state.addedProducts) })
    );
  }, [state.addedProducts, dispatch]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    if (name === "decoder") {
      setState({
        ...state,
        decoder: checked,
        tv: true,
        addedProducts: {
          ...state.addedProducts,
          decoder: checked,
          tv: true,
        },
      });
    } else {
      setState({
        ...state,
        [name]: checked,
        addedProducts: {
          ...state.addedProducts,
          [name]: checked,
        },
      });
    }
  };

  return (
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
      <FormLabel component="legend">Wynierz produkt z listy:</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              disabled={chosenYear ? false : true}
              checked={tv}
              onChange={handleChange}
              name="tv"
            />
          }
          label="Telewizja"
        />
        <FormControlLabel
          control={
            <Checkbox
              disabled={chosenYear ? false : true}
              checked={decoder}
              onChange={handleChange}
              name="decoder"
            />
          }
          label="Dekoder 4K"
        />
        {productsList.map((product: Services) => (
          <FormControlLabel
            key={product.id}
            control={
              <Checkbox
                disabled={chosenYear ? false : true}
                checked={state.addedProducts[product.name] || false}
                onChange={handleChange}
                name={product.name}
              />
            }
            label={product.name}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};
