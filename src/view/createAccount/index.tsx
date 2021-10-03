import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { useState } from 'react'
import {Container } from './styled'
export const CreateAccount  = () => {
  const [name, setname] = useState(null)
  const [email, setemail] = useState(null)
  const [password, setPassword] = useState(null)
  const [cns, setcns] = useState(null)
  const router = useRouter()

  const registryUser = event => {
    event.preventDefault()
  }

  const resquestFn = async () => {
    const res = await fetch(process.env.SITE, {
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        cns: cns
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
      
    })
    const result = await res.json() 
    result && router.push('/')
  }
  resquestFn()
  
  return (
    <Container>
      <section>

        <div id="logo-box">
          <div id="logo">
            <img src="4.png" alt="" />
          </div>
          <h1>Create your account</h1>
        </div>

        <form action="" id="main-form" onSubmit={registryUser}>
          <div>
            <label htmlFor="name">Name</label>
            <input onChange={e=>setname(e.target.value)} type="text" id="name" placeholder="your name" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input onChange={e=>setemail(e.target.value)} type="email" id="email" placeholder="your email"/>
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input onChange={e=>setPassword(e.target.value)} type="password" id="password" placeholder="your password"/>
          </div>

          <div id="vac-card">
            <h2>Vaccination Card</h2>
            <label htmlFor="file-picker">Select file...

            <input onChange={e=>setcns(e.target.value)} type="file" id="file-picker" accept=".jpg, .jpeg, .png"/>

            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="upload" className="svg-inline--fa fa-upload fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path></svg>

            </label>
          </div>

          <div>
            <button className="backLogin" type="submit" ><Link href='/login'><a>Back</a></Link></button>
            <button className="submit" type="submit">Submit</button>
          </div>
        </form>
      </section>
    </Container>
  )
}
