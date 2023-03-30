import { Stack } from "@mui/material";
import { AddProductButton } from "./components/buttons/AddProductButton";
import { AddYeatButton } from "./components/buttons/AddYearButton";
import PriceList from "./components/table";

function App() {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <PriceList />
        <AddYeatButton />
      </Stack>
      <AddProductButton />
    </div>
  );
}

export default App;
