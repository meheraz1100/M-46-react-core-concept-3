import { useState } from "react";
import { AiFillWarning } from "react-icons/ai";

const StateFulForm = () => {
    const [name, setName] = useState('Meheraz')
    const [email, setEmail] = useState(null)
    const [password, setpassword] = useState(null)
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 6){
            setError('Password must 6 characters long')
        }
        else{
            setError('')
            console.log(name, email, password);
        }
    }

    const handleNameChange = e => {
        // console.log(e.target.value);
        setName(e.target.value)
    }

    const handleEmailChange = e => {
        // console.log(e.target.value);
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        // console.log(e.target.value);
        setpassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                onChange={handleNameChange}
                value={name}
                type="text" name="name"/>
                <br />
                <input 
                onChange={handleEmailChange}
                type="email" name="email" id="" />
                <br />
                <input 
                onChange={handlePasswordChange}
                type="password" name="password" id="" required />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p className="text-red-600"><AiFillWarning></AiFillWarning>{error}</p>
                }
            </form>

        </div>
    );
};

export default StateFulForm;