import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const Calculator = () => {
    const chosenYear: string = useSelector((state: RootState) => state.chosenYear);
    const chosenProduct = useSelector((state: RootState) => state.chosenProduct);
    

    return (
        <div></div>
    )
}