import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const AssetContaxt = createContext("gold");
export const MoneyContext = createContext(1000);

const Grandpa = () => {
    const [money, setMoney] = useState(1000)
  const asset = "diamond";

  return (
    <div className="grandpa">
        <p>Net Money: {money}</p>
      <h2 className="text-2xl">GrandPa</h2>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContaxt.Provider value="gold">
          <section className="flex">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
          </section>
        </AssetContaxt.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;

/**
 * 1. create a new context and export it
 * 2. add provider for the contaxt with a value. value be anything
 * 3. useContext to access value in the context API
 * 3.
 */
