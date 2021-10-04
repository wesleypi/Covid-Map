import styled from 'styled-components'

export const Container = styled.main`
  margin: auto;
  height: 100vh;
  width: 90vw;
  padding: 10px;
  display: flex;
  flex-direction: column;
  .is-white{
    filter: invert(100%);
  }
  .header {
    padding: 20px;
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;   
    #logo{
      width: 10vh;
      img{
        width: 100%;
      }
    }
    .settings {
    display: flex;
    flex-direction: column;
    justify-content: start;
    height: 8vh;
    gap: 2vw;
    
    
    p {
      display: block;
      font-size: 18px;
      font-weight: bold;
      color: white;
    }
    
    div {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      height: 100%;
      gap: 2vw;
      img{
        width: 3vh;
        
      }
    }
  }
  
  }
  nav {
    margin-top: -0.4px;
    background-color: black;
    text-align: center;
    justify-content: space-between;
    height: 8vh;
  
    #navigation{
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      height: 100%;
      

      li {
        
        list-style: none;
        width: 10vh;
        height: 6vh;
        margin: auto;
        a {
          img{
            max-height: 100%;
          }
        }
      }
    }
  }

  

`