import Cousin from "../Cousin/Cousin";

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Nazim'}></Cousin>
                <Cousin name={'Shova'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;