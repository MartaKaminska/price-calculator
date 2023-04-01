import { Stack } from "@mui/material";
import {
  AddProductButton,
  AddYearButton,
  Calculator,
  Offer,
  PriceList,
} from "./components";

function App() {
  return (
    <div style={{ margin: "50px" }}>
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
