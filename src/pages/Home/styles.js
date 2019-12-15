import styled from 'styled-components';

export const Header = styled.div`
  font: 12px 'Orbitron', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px 10px 5px;

  header {
    margin: 10px;

    h1 {
      font-size: 3em;

      span {
        color: #21d8ff;
      }
    }
  }

  ul {
    display: flex;
    font-size: 1.5em;
    margin-top: 5px;

    a {
      text-decoration: none;
      color: inherit;

      li {
        padding: 0 10px;
        cursor: pointer;
        transition: color 100ms ease-in-out;

        :hover {
          color: #21d8ff;
        }
      }
    }
  }
`;
export const Filters = styled.div`
  display: flex;
  margin: 0.5rem;
  justify-content: center;
`;
export const Pagination = styled.div`
  display: flex;
  /*height: 2rem;*/
  margin: 0.5rem;
  justify-content: space-evenly;
`;
