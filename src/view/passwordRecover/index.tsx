import React from 'react'
import Link from 'next/link'
import {Container } from './styled'
export const PasswordRecover  = () => {
  return (
    <Container>

        <div className="imageh1">
          <img src="4.png" alt="" />

          <h1>Password Recover</h1>
        </div>


        <form action="" className="labels" >
          <label htmlFor="emailref">Email</label>
          <input type="email" id="emailref" placeholder="your password here" />
          <button type="submit">Send</button>
          <button className="backLogin" type="button" ><Link href='/login'><a>Back</a></Link></button>
        </form>

    </Container>
  )
}
