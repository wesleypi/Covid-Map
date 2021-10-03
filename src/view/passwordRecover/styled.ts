import styled from 'styled-components'

export const Container = styled.main`
height: 90vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

.imageh1 {
  img {
    height: 170px;
    transform: translate(-25%, -10%);
    margin-bottom: 3vh;
  }
}

.labels {
  display: flex;
  flex-direction: column;
  align-items: center; 

  label {
    align-self: start;
    font-size: 15px;
  }

  input {
    width: 70vw;
    height: 39px;
    border: 2px solid #232323;
    border-radius: 5px;
    padding-left: 3vw;


  }
  input::-webkit-input-placeholder {
    text-align: start;
    transition: 200ms;
    
    &:hover {
      color: black;
      font-weight: bold;
    }
  }

  button {
    width: 60vw;
    max-width: 500px;
    height: 35px;
    background: black;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 3vh;

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

}




`
