import styled from 'styled-components'

export const Container = styled.main`
  height: 100vh;
  width: 100vw;
  padding: 10px;
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;   
    
    .settings {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
    p {
      display: block;
      font-size: 18px;
      font-weight: bold;
    }
    div {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      img {
        margin: 10px;
      }
    }
  }
  }

  .mainList {
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 10vh;
      li {
        list-style: none;
        a {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }

`