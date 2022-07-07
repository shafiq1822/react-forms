import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const MulipleInputs = () => {

    const [person, setPerson] = useState({
        name: "",
        email: "",
        age: ""
    });

    const [people, setPeople] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
    }

    const changehandler = (e) => {
        console.log(e.target)
    }
    return (
        <>
            <form className='form' onSubmit={submitHandler}>
                <div className="form-control">
                    <label htmlFor="text">Username : </label>
                    <input 
                    type="text" 
                    id='username' 
                    value={person.name} 
                    onChange={changehandler}/>
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email : </label>
                    <input type="email" 
                    id='email' 
                    value={person.email} 
                    onChange={changehandler}/>
                </div>
                <div className="form-control">
                    <label htmlFor="age">Age : </label>
                    <input 
                    type="text" 
                    id='age' 
                    value={person.age} 
                    onChange={changehandler}/>
                </div>
                <button type='submit'>Submit</button>
            </form>

            {people.map((person) => {
                const { id, username, email } = person;
                return (
                    <div className="item" key={id}>
                        <h4>{username}</h4>
                        <p>{email}</p>

                    </div>
                );
            })}
        </>
    )
}

export default MulipleInputs;