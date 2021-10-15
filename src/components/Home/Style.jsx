import styled from 'styled-components';

const SHome = styled.div`
  .container {
    height: 90vh;
    display: flex;
    align-items: center;
  }

  .name {
    display: flex;
    flex-direction: column;
    margin: 10px;
    align-self: center;
    width: 50vw;
    padding: 60px;

    animation-name: myName;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    @keyframes myName {
      from {
        margin-left: 100%;
      }
    }
  }

  h1 {
    font-size: 5rem;
    font-weight: 900;
    margin-bottom: 90px;
    width: inherit;
  }
  h2 {
    font-size: 2rem;

    animation-name: title2;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    @keyframes title2 {
      from {
        font-size: 0.9rem;
      }
    }
  }

  .pictos {
    display: flex;
    margin-left: 10%;
    margin-top: 10%;

    img {
      opacity: 1;
      width: 55px;
      margin: 15px;
    }

    img:hover {
      opacity: 0.5;
    }
  }

  .cv a {
    display: flex;
    overflow: hidden;
    text-decoration: none;
    width: 17vw;
    color: #f2f2f2;

    p {
      margin-left: -17vw;
    }
  }

  .cv:hover {
    img {
      opacity: 0.3;
    }
    p {
      font-weight: bold;
      transition: 0.6s;
      margin-left: 0;
    }
  }

  .about {
    display: flex;
    align-content: center;
    height: inherit;
    width: 50vw;
    margin-top: 5vh;
    overflow: hidden;

    .devPic {
      img {
        height: 75vh;
        width: 45vw;
        margin-left: -8vw;
        opacity: 0.7;
        border-radius: 48%;
        animation-name: devPic;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        @keyframes devPic {
          from {
            margin: 20px;
            opacity: 0;
          }
        }
      }
    }

    .myPic {
      z-index: 10;
      align-self: flex-end;

      img {
        align-self: center;
        height: 40vh;
        border-radius: 60%;
      }
    }
  }
`;

export default SHome;
