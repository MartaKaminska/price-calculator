import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import Button from "@mui/material/Button";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Input,
  InputLabel,
} from "@mui/material";
import { RootState } from "../../store/store";
import { addYear } from "../../store/reducers";

export const AddProductButton = () => {
  const dispach = useDispatch();
  const years: string[] = useSelector((state: RootState) => state.years);
  const productsList: Services[] = useSelector(
    (state: RootState) => state.services
  );
  const [open, setOpen] = useState<boolean>(false);
  const [product, setProduct] = useState<string>("");
  const [prices, setPrices] = useState<string[]>(
    Array(productsList.length).fill("")
  );

  const handleClose = () => setOpen(false);
  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    dispach(addYear({ product, prices }));
    setProduct("");
    setPrices([]);
    handleClose();
  };

  return (
    <div>
      <Button variant="text" onClick={() => setOpen(true)}>
        dodaj kolejny produkt
      </Button>
      <Dialog open={open} onSubmit={handleSubmit}>
        <form>
          <DialogTitle>
            Dodaj kolejny produkt i jego cenę w podanych latach
          </DialogTitle>
          <DialogContent style={{ display: "flex", flexDirection: "column" }}>
            <FormControl style={{ marginTop: "20px" }}>
              <InputLabel htmlFor="component-simple" required={true}>
                produkt
              </InputLabel>
              <Input
                id="component-simple"
                type="number"
                value={product}
                onChange={(event) => setProduct(event?.target.value)}
              />
            </FormControl>
            {years.map((year, index) => (
              <FormControl key={nanoid()} style={{ marginTop: "20px" }}>
                <InputLabel htmlFor="component-simple">{year}</InputLabel>
                <Input
                  id="component-simple"
                  type="number"
                  value={year[index]}
                  onChange={(event) => {
                    const newPrices = [...prices];
                    newPrices[index] = event.target.value;
                    setPrices(newPrices);
                  }}
                />
              </FormControl>
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>odrzuć</Button>
            <Button type="submit" onClick={handleClose}>
              zatwierdź
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};
