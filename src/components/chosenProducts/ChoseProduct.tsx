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

export const ChoseProduct = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state: RootState) => state.services).slice(
    4
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const chosenProducts = () =>
    Object.entries(state.addedProducts)
      .filter(([, value]) => value === true)
      .map(([key]) => key);

  useEffect(() => {
    dispatch(addChosenProduct({ products: chosenProducts() }));
  }, [state.addedProducts, dispatch, chosenProducts]);

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
          control={<Checkbox checked={tv} onChange={handleChange} name="tv" />}
          label="Telewizja"
        />
        <FormControlLabel
          control={
            <Checkbox
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