import styled from 'styled-components'


export const Container = styled.div`
  position: absolute;
  right: 0vh;
  left: 0vh;
  bottom: 0vh;
  background: black;

  ul{
    display: flexbox;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;

      li {
        list-style: none;
        cursor: pointer;
        
        a {
            text-decoration: none;
            color: #fff;
        }
      }
    }

    
`