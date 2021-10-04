import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  height:100vh;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
    #logo-box {
        display: flex;
        align-items: center;
        width: 90vw;
        flex-direction: column;
  
      #logo {
        height: 25vh;
        align-items: center;
        img {
          height: 100%;
        }
      }   
    }
    .show-message{
      display: flex;
      justify-content: start;
      flex-direction: column;
      align-items: center;
      margin: 0 4vh 20vh 4vh;
      gap: 1.5vh;
      
    }
    #text{
      text-align: center;
      font-size: 2.5vh;
    }
    .backLogin {
        width: 60vw;
        max-width: 500px;
        min-height: 4vh;
        background: gray;
        color: white;
        height: 35px;
        border: none;
        font-size: 2vh;
        margin-top: 14px;
        margin-bottom: 14px;
        border-radius: 3px;
        font-weight: 500;
}
`