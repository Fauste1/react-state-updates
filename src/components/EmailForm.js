
// todo, update the object to be nested, refactor the components and the handleChange function to work with this new setup

import { useState } from "react";

export default function EmailForm() {
    
    const [person, setPerson] = useState({
        initials: {
            firstName: '',
            lastName: '',
        },
        companyName: '',
    });
    
    function handleChange(e) {
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        })
    }
    
    function handleInitialsChange(e) {
        setPerson({
            ...person,
            initials: {
                ...person.initials,
                [e.target.name]: e.target.value
            }
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
                    onChange={handleInitialsChange}
                    value={person.initials.firstName}
                />
                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text"
                    name="lastName"
                    value={person.initials.lastName}
                    placeholder="Doe"
                    id="lastName" 
                    style={{
                        display: "block",
                        margin: 10
                    }} 
                    onChange={handleInitialsChange}  
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
            {person.companyName && <p>Your email is { person.initials.firstName.toLowerCase() + '.' + person.initials.lastName.toLowerCase() + '@' + person.companyName.toLowerCase()}.com</p>}
            <button onClick={() => setPerson({initials:{ firstName: '', lastName: '' }, companyName: ''})}>Reset</button>
        </>
    );
}