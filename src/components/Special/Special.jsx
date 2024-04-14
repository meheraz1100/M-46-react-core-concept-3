import { useContext } from "react";
import { AssetContaxt } from "../GrandPa/Grandpa";

const Special = ({asset}) => {
    const gift = useContext(AssetContaxt)
    return (
        <div>
            <h2 className="text-2xl">Special</h2>
            <p>Has: {asset}</p>
            <p>Also has: {gift}</p>
        </div>
    );
};

export default Special;