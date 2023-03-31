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
    <div style = {{margin: "50px"}}>
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
