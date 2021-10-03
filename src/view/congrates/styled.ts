import styled from 'styled-components'

export const Container = styled.body`
    display: flex;
    height:100vh;
    align-items: center;
    justify-content: space-around;
    
    #logo-box {
        display: flex;
        align-items: center;
        width: 90vw;
  
        #logo {
          height: 15vh;
          margin-right: 3vw;
          img {
            height: 100%;
          }
        }   
    }
    .backLogin {
        width: 60vw;
        max-width: 500px;
        background: gray;
        color: white;
        height: 35px;
        border: none;
        font-size: 16px;
        margin-top: 14px;
        margin-bottom: 14px;
        border-radius: 3px;
        font-weight: 500;
}
`