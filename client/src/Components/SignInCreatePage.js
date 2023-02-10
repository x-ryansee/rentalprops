import React from 'react'
import SignIn from "./SignIn.js"
import AdminPortal from './AdminPortal'

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
        <div style={{margin: "80px"}}className="modalParent">

        {user ? <button className="button-create" onClick={logout}>Logout</button> : null}
        <div>
         <h1>Welcome {user ? ` ${user.name}` : null}</h1>
         {user ? <AdminPortal/> : null}
        </div>
        {user === null ? (
          <>
            <SignIn setUser={setUser} />

          </>
        ) : null}
          </div>
        </div>
      </div>
    );
}

export default SignInCreatePage
