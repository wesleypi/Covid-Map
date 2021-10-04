import Link from 'next/link'
import React from 'react'
import {Container} from './styled'

export const Dashboard = () => {
  return (
    <Container>
      <div className="header">
        <div id= "logo">
          <img src="3.png" alt="" width="100"/>
        </div>

        <div className="settings">
          <p>Hello Felipe</p>
          <div>
            <img  src="lupa.svg" alt="lupa" className="is-white" />
            <img  src="engrnagem.svg" alt="engrenagem" className="is-white" />
          </div>
        </div>
        
      </div>
      <nav>
          <ul id ="navigation">
            <li>
              <Link href="/restaurants">
                <a>
                  <img src="\restaurant_menu.svg" alt="Comerce" className="is-white"/>
                  <div>
                    
                  </div> 
                </a>
              </Link>
            </li>
            <li>
              <Link href="/party">
                <a>
                  <img src="/danca.png" alt="Party" className="is-white" />
                  <div>
                    
                  </div> 
                </a>
              </Link>
            </li>
            <li>
              <Link href="/comerce">
                <a>
                  <img src="/shopping-cart.png" alt="Centers" className="is-white" />
                  <div>
                    
                  </div> 
                </a>
              </Link>
            </li>
            <li>
              <Link href="/covid data">
                <a>
                  <img src="/map-marked.svg" alt="Map" className="is-white"/>
                  <div>
                    
                  </div> 
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      <section>
        
      </section>
        
    </Container>
  )
}
