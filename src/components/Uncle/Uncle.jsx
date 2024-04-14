import Cousin from "../Cousin/Cousin";

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Nazim'} asset={asset}></Cousin>
                <Cousin name={'Shova'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;