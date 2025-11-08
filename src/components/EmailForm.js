
import { useState } from "react";

export default function EmailForm() {
    
    const [person, setPerson] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
    });
    
    function handleChange(e) {
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <form>
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="John"
                    style={{ 
                        display: "block",
                        margin: 10
                    }}
                    onChange={handleChange}
                    value={person.firstName}
                />
                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text"
                    name="lastName"
                    value={person.lastName}
                    placeholder="Doe"
                    id="lastName" 
                    style={{
                        display: "block",
                        margin: 10
                    }} 
                    onChange={handleChange}  
                />
                <label htmlFor="companyName">Company</label>
                <input 
                    type="text"
                    name="companyName"
                    value={person.companyName}
                    placeholder="Acme"
                    id="companyName" 
                    style={{
                        display: "block",
                        margin: 10
                    }} 
                    onChange={handleChange}  
                />
            </form>
            {person.companyName && <p>Your email is { person.firstName.toLowerCase() + '.' + person.lastName.toLowerCase() + '@' + person.companyName.toLowerCase()}.com</p>}
            <button onClick={() => setPerson({firstName: '', lastName: '', companyName: ''})}>Reset</button>
        </>
    );
}