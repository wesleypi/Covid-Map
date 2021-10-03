import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  height:100vh;
  align-items: center;
  justify-content: space-around;

  section {
    width: 90vw;
    display:flex;
    flex-direction: column;
    align-items: center;

    div {
      margin-bottom: 3vh;
    }

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

      h1 {
        font-size: 6vw;
      }
    }

    #main-form {
      display:flex;
      flex-direction: column;
      align-items: center;

      div {
        display: flex;
        flex-direction: column;

        input {
          width: 90vw;
          height: 5vh;
          padding-left: 3vw;
          border: gray solid 2px;
          margin-top:1vh;
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

      #vac-card {
        width: 90vw;

        h2 {
          font-size: 14px;
          font-weight: normal;
        }
        label{
          width: 90vw;
          height: 5vh;
          border: gray solid 2px;
          margin-top: 1vh;
          cursor: pointer;
          padding: 0 3vw;
          display: flex;
          align-items: baseline;
          justify-content: space-between;

          svg {
            height: 3vh;
            transform: translate(0, 25%);
          }
        }
        #file-picker::-webkit-file-upload-button {
            display: none;
        }
        #file-picker{
            border: none;
            height: 3vh;
            margin: 0;
            width: 50vw;
            cursor: pointer;
        }
      }
    }
  }

`
