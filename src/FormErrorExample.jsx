import React, { useState } from 'react'

const FormErrorExample = () => {
  const [username, setUsername] = useState("Shafiq");

  const submitHandler = (e) => {
    e.preventDefault();
  }
  return (
      <>
      <form className='form' onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="username">Username : </label>
          <input type="text" id='username' value={username} onChange={() => setUsername("Shafiq")}/>
        </div>
        <button type='submit'>Submit</button>
      </form>
      </>
  )
}

export default FormErrorExample;