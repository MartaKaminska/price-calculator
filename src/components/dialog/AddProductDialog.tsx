import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Input,
  InputLabel,
} from "@mui/material";

import { addService, RootState } from "../../store/store";

export const AddProductDialog = ({ isOpen, handleClose }: DialogProps) => {
  const dispatch = useDispatch();
  const years: string[] = useSelector((state: RootState) => state.years);
  const [open, setOpen] = useState<boolean>(false);
  const [product, setProduct] = useState<string>("");
  const [prices, setPrices] = useState<string[]>(new Array(years.length).fill(""));

  useEffect(() => setOpen(isOpen), [isOpen]);
  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    dispatch(addService({ product, prices }));
    setProduct("");
    setPrices(new Array(years.length).fill(""));
    handleClose();
  };
  return (
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
              type="string"
              value={product}
              onChange={(event) => setProduct(event?.target.value)}
            />
          </FormControl>
          {years.map((year, index) => (
            <FormControl key={index} style={{ marginTop: "20px" }}>
              <InputLabel htmlFor="component-simple">{year}</InputLabel>
              <Input
                id="component-simple"
                type="number"
                value={prices[index]}
                onChange={(event) =>
                  setPrices([
                    ...prices.slice(0, index),
                    event.target.value,
                    ...prices.slice(index + 1),
                  ])
                }
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
  );
};
