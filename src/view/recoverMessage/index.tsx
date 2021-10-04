import React from 'react'
import Link from 'next/link'
import {Container} from './styled'

export const recoverMessage = () => {
    return (
        <Container>
            <div id="logo-box">
                <div id="logo">
                    <img src="4.png" alt="Logo"/>
                </div>
            </div>

            <main className ="show-message">
                <h1 id="title">Hey!</h1>
                    <p id="text">We send you a link to your registration email. Go there to retrieve your password.</p>
                <nav>
                    <button className="backLogin" type="submit" ><Link href='/login'><a>Back</a></Link></button>
                </nav>
            </main>
        </Container>
    )
}
