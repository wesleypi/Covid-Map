import styled from 'styled-components'

export const Container = styled.main` 
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: space-around;
  
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border: 2px solid black; 

    border-radius: 10px;
    width: 90vw;
  }

  section div {
    margin-bottom: 3vh;
  }

  #logo{
      height: 35vh;
      border-radius: 50px;
  }
  #logo img{
    max-height: 100%;
    height: 100%;
  }

  #title {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 7vh;
    justify-content: space-between;
    margin-bottom: 10vh;

    h1 {
      font-size: 30px;
      margin-bottom: 2vh;
    }
  }

  section .form input{
      margin-top: 6px;
    border: none;
  }&:focus{
    border-color: green;
  }

  section .mainForm {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form {
    display: flex;
    flex-direction: column;
    
  }
  
  .form input {
    width: 60vw;
    padding: 4px 0;
    padding-left: 3vw;
  }
  
  section .buttons {
    display: flex;
    flex-direction: column;
    @media(min-width: 1920px){
        flex-direction: row;  
      }
    .access {
      width: 60vw;
      max-width: 500px;
      height: 35px;
      background: black;
      color: white;
      font-size: 16px;
      border: none;
      border-radius: 3px;
      font-weight: 500;

    }

    .createAccount {
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
  }

  
`