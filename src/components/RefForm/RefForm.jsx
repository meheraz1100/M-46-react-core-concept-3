import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        if(passwordRef)
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} className="m-4" type="text" name="name"/>
                <br />
                <input ref={emailRef} defaultValue="mosaiyebmeheraz@gmail.com" className="m-4" type="email" name="email" id="" />
                <br />
                <input ref={passwordRef} className="m-4" type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;