import React from 'react'
import { useState } from 'react'
import RegistrationForm from './RegistrationForm'
import SignIn from "./SignIn.js"

function SignInCreatePage({user, setUser}) {
 
    const logout = () => {
      fetch('/logout', {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json"

      }
    })
    .then (() => {
      setUser(null)
    })
    }

    return (
      <div>
         <div>
           <div>
           <header>
       <h2 className="h2-loop">The Loop 🔁</h2>
       </header>
           </div>
        <div className="modalParent">

        {user ? <button className="button-create" onClick={logout}>Logout</button> : null}
        <h1>Welcome {user ? ` ${user.name}` : null}</h1>
        {user === null ? (
          <>
            <SignIn setUser={setUser} />
            <br/>
            <button className="button-create">Create Profile</button>
              <RegistrationForm setUser={setUser} />
          </>
        ) : null}
          </div>
        </div>
      </div>
    );
}

export default SignInCreatePage