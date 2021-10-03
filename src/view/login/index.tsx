/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react'
import {Container} from './styles'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
export const Login = () => {
  const [password, setPassword] = useState(false)
  const [username, setUsername] = useState(false)
  const router = useRouter()
  
  const registerUser = event => {
    event.preventDefault() // don't redirect the page where we'll add our form logic
    
  }
  const resquestFn = async () => {
    const res = await fetch(process.env.SITE, {
      body: JSON.stringify({
        email: username,
        password: password, 
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
      
    })
    const result = await res.json() 
    result && router.push('/')
  }
  function usernameFn(e:any) {
   const value =  e.target.value
   if(value.length <= 0) {
    setUsername(false)
   }else {
    setUsername(true)
   }
  }
  function passwordFn(e:any) {
    const value =  e.target.value
    if(value.length <= 0) {
     setPassword(false)
    }else{
      setPassword(true)
    }
  }

  
  return (
    <Container>
        <section>
          <div id="logo">
            <img src="4.png" alt="go horse" />
          </div>

          <div id="title">
            <h1>Login</h1>
            <h5>Sign in to continue</h5>
          </div>

          <form className="mainForm" onSubmit={registerUser}>
            <div className="form">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={usernameFn} placeholder="gohorse@nasa.com"/>
            </div>

            <div className="form">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={passwordFn} placeholder="*******"/>
            </div>


            <div className="buttons">

              <button 
                onClick={()=>resquestFn()}
                style={{background: `${username && password ?'green' :'red'}`}} 
                className="access" 
                type="submit">Access

              </button>

              <button className="createAccount" type="submit" ><Link href='/createAccount'><a>Create your account</a></Link></button>
              
              <button className="access"><Link href='/PasswordRecover'><a>Forget Password</a></Link></button>
            </div>
          </form>


        </section>


    </Container>
  )
}
