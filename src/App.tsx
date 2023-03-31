import { Stack } from "@mui/material";
import {
  AddProductButton,
  AddYearButton,
  Offer,
  PriceList,
} from "./components";
import { Calculator } from "./components/calculator";

function App() {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <PriceList />
        <AddYearButton />
      </Stack>
      <AddProductButton />
      <Offer />
      <Calculator />
    </div>
  );
}

export default App;
