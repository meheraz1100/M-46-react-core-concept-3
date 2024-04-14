import Special from "../Special/Special";

const Myself = ({asset}) => {
    return (
        <div>
            <h2 className="text-2xl">Myself</h2>
            <section>
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

export default Myself;