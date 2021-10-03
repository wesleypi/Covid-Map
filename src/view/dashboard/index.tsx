import Link from 'next/link'
import React from 'react'
import {Container} from './styled'

export const Dashboard = () => {
  return (
    <Container>
      <div className="header">
        <img src="4.png" alt="" width="100"/>

        <div className="settings">
          <p>Hello Felipe</p>
          <div>
          <img src="lupa.svg" alt="lupa" width="30"/>
          <img src="engrnagem.svg" alt="engrenagem" width="30" />
          </div>
        </div>
      </div>
      

        <div className="mainList">
          <ul>
            <li>
              <Link href="/party">
                <a>
                  <img src="" alt="" />
                  <div>
                    divParty
                  </div> 
                </a>
              </Link>
            </li>
            <li>
              <Link href="/comerce">
                <a>
                  <img src="" alt="" />
                  <div>
                    divParty
                  </div> 
                </a>
              </Link>
            </li>
            <li>
              <Link href="/party">
                <a>
                  <img src="" alt="" />
                  <div>
                    divParty
                  </div> 
                </a>
              </Link>
            </li>
            <li>
              <Link href="/covidData">
                <a>
                  <img src="" alt="" />
                  <div>
                    divParty
                  </div> 
                </a>
              </Link>
            </li>
            <li>
              <Link href="/restaurants">
                <a>
                  <img src="" alt="" />
                  <div>
                    divParty
                  </div> 
                </a>
              </Link>
            </li>
          </ul>
        </div>
    </Container>
  )
}
