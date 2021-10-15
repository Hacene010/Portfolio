import styled from 'styled-components';

const SAbout = styled.div`
  overflow: hidden;
  margin-bottom: 10vh;
  margin-top: 10vh;

  .myPic {
    margin-top: 0;
    width: 30vw;

    img {
      border-radius: 8px;
      height: 90vh;
      margin: auto;
    }
  }

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: inherit;
  }

  .desc-container {
    background-color: #6e7b8b9f;
    opacity: 0.7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;
    height: 90vh;
    text-align: center;
    border-radius: 50%;
  }

  h1 {
    color: #9ed0c9;
    font-size: 2.5em;
    font-weight: 900;
    text-transform: uppercase;
  }

  .intro {
    width: 90%;
    margin: 50px;
    padding-top: 50px;
    text-align: center;
    vertical-align: middle;
  }

  .title {
    width: 500px;
  }
`;

export default SAbout;
