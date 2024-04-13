import useInputState from "../../Hooks/useInputState";

const HookForm = () => {

    const nameState = useInputState('Meheraz')
    console.log(nameState)

    const handleSubmit = e => {
        console.log('Form Data', name)
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="name"/>
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;