import React from 'react'
import Link from 'next/link'
import {Container} from './styled'

export const Congrates = () => {
    return (
        <Container>
            <div id="logo-box">
                <div id="logo">
                    <img src="4.png" alt="" />
                </div>
                <h1>Create your account</h1>
            </div>

            <main>
                <h1>Thankyou!</h1>
                    <p>Our team will analise your submit in feel minutes you must receive a confirmation e-mail, please check your inbox e-mail.</p>
                <nav>
                    <button className="backLogin" type="submit" ><Link href='/login'><a>Back</a></Link></button>
                </nav>
            </main>
        </Container>
    )
}
