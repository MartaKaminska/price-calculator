import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

export const AddYeatButton = () => {
  const dispach = useDispatch();
  const years: string[] = useSelector((state: RootState) => state.years);
  const productsList: Services[] = useSelector(
    (state: RootState) => state.services
  );
  const [open, setOpen] = useState<boolean>(false);
  const [year, setYear] = useState<string | undefined>(
    years.length ? `${+years[years.length - 1] + 1}` : ""
  );
  const [prices, setPrices] = useState<string[]>(
    Array(productsList.length).fill("")
  );

  const handleClose = () => setOpen(false);
  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    dispach(addYear({ year, prices }));
    setYear("");
    setPrices([]);
    handleClose();
  };

  return (
    <div>
      <Button variant="text" onClick={() => setOpen(true)}>
        dodaj kolejny rok
      </Button>
      <Dialog open={open} onSubmit={handleSubmit}>
        <form>
          <DialogTitle>
            Dodaj kolejny rok oraz ceny dla poszczególnych kategorii produktów
          </DialogTitle>
          <DialogContent style={{ display: "flex", flexDirection: "column" }}>
            <FormControl style={{ marginTop: "20px" }}>
              <InputLabel htmlFor="component-simple" required={true}>
                rok
              </InputLabel>
              <Input
                id="component-simple"
                type="number"
                value={year === undefined ? "" : year}
                onChange={(event) => setYear(event?.target.value)}
              />
            </FormControl>
            {productsList.map((product, index) => (
              <FormControl key={product.id} style={{ marginTop: "20px" }}>
                <InputLabel htmlFor="component-simple">
                  {product.name}
                </InputLabel>
                <Input
                  id="component-simple"
                  type="number"
                  value={prices[index]}
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
