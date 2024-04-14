import Cousin from "../Cousin/Cousin";

const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Raju'}></Cousin>
                <Cousin name={'joe Biden'}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;