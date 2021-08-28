import styled from 'styled-components';

const SAchievements = styled.div`
  .title {
    height: 15vh;

    h1 {
      font-size: 2.5em;
      font-weight: 900;
      text-align: center;
    }

    a {
      color: #415164;
      @media (max-width: 450px) {
        display: none;
      }
    }
  }
  .projects {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .one-project {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 30%;
    margin: 20px;
    padding: 5px;

    img {
      border-radius: 8px;
      width: 250px;
      height: 350px;
    }

    .btn {
      button {
        display: flex;
        align-items: center;
        padding: 5px;
        border-radius: 10px;
      }
      img {
        width: 20px;
        height: inherit;
        padding: 5px;
      }
    }
  }
`;

export default SAchievements;
