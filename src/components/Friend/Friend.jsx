import { useContext } from "react";
import { AssetContaxt } from "../GrandPa/Grandpa";

const Friend = () => {
    const gift  = useContext(AssetContaxt)
    return (
        <div>
            <h2 className="text-2xl"></h2>
            <p>Has: {gift}</p>
        </div>
    );
};

export default Friend;