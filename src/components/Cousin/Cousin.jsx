import Friend from "../Friend/Friend";
import Special from "../Special/Special";

const Cousin = ({name,asset}) => {
    return (
        <div>
            <h2 className="text-2xl">Cousin</h2>
            <p>{name}</p>
            <section>
                {asset && <Special asset={asset}></Special>}
                {name === 'joe Biden' && <Friend></Friend>}
            </section>
        </div>
    );
};

export default Cousin;