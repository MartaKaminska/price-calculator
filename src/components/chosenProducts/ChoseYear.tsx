import { useDispatch, useSelector } from "react-redux";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { addChosenYear, RootState } from "../../store/store";
import { useState } from "react";

export const ChoseYear = () => {
  const dispatch = useDispatch();
  const years: string[] = useSelector((state: RootState) => state.years);
  const [state, setState] = useState({
    selectedYear: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ selectedYear: event.target.value });
    dispatch(addChosenYear({ state: event.target.value }));

  }

  return (
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
      <FormLabel component="legend">
        Wynierz rok dla którego ma być wyliczona cena:
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handleChange}
        value={state.selectedYear}
      >
        {years.map((year: string) => (
          <FormControlLabel
            key={year}
            control={<Radio />}
            label={year}
            value={year}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
