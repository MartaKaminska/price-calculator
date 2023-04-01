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

import { addYear, RootState } from "../../store/store";

export const AddYeatDialog = ({ isOpen, handleClose }: DialogProps) => {
  const dispatch = useDispatch();
  const years: string[] = useSelector((state: RootState) => state.years);
  const productsList: Services[] = useSelector(
    (state: RootState) => state.services
  );
  const [open, setOpen] = useState<boolean>(false);
  const [year, setYear] = useState<number>(
    years.length ? (+years[years.length - 1] + 1) : 0
  );
  const [prices, setPrices] = useState(Array(productsList.length).fill(""));

  useEffect(() => setOpen(isOpen), [isOpen]);
  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    dispatch(addYear({ year, prices }));
    setYear(year + 1);
    setPrices([]);
    handleClose();
  };

  return (
    <Dialog open={open} onSubmit={handleSubmit}>
      <form>
        <DialogTitle>
          Dodaj kolejny rok oraz ceny dla poszczególnych kategorii produktów
        </DialogTitle>
        <DialogContent style={{ display: "flex", flexDirection: "column" }}>
          <FormControl style={{ marginTop: "20px" }}>
            <InputLabel htmlFor="component-simple" required={true}>
              Rok
            </InputLabel>
            <Input
              id="component-simple"
              type="number"
              value={year === undefined ? "" : year}
              onChange={(event) => setYear(+event?.target.value)}
            />
          </FormControl>
          {productsList.map((product, index) => (
            <FormControl key={product.id} style={{ marginTop: "20px" }}>
              <InputLabel htmlFor="component-simple">{product.name}</InputLabel>
              <Input
                id="component-simple"
                type="number"
                value={prices[index]}
                onChange={(event) => {
                  const newPrices = [...prices];
                  newPrices[index] = +event.target.value;
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
  );
};
