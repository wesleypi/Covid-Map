import styled from 'styled-components'

export const Container = styled.div`
    ul{ 
      display: flexbox;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;

      li {
            text-decoration: none;
            list-style: none;
            padding: 0 10px;
        }
    }
`