import React from 'react'
import Link from 'next/link'
import {Container} from './styled'

export const Congrates = () => {
    return (
        <Container>
            <div id="logo-box">
                <div id="logo">
                    <img src="4.png" alt="Logo"/>
                </div>
            </div>

            <main className ="show-message">
                <h1 id="title">Thankyou!</h1>
                    <p id="text">Our team will analise your submit in feel minutes you must receive a confirmation e-mail, please check your inbox e-mail.</p>
                <nav>
                    <button className="backLogin" type="submit" ><Link href='/login'><a>Back</a></Link></button>
                </nav>
            </main>
        </Container>
    )
}
