import styled from 'styled-components';

export const MainWrap = styled.div`
  position: relative;
  background-color: #3d3332;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  padding-top: 90px;

  @media (min-width: 1170px) {
    height: calc(100vh - 130px);
    width: calc(100vw - 240px);

    padding: 130px 90px 0px 150px;
  }

  @media (min-width: 1080px) {
    height: calc(100vh - 280px);
    width: calc(100vw - 240px);

    padding: 150px 90px 130px 150px;
  }
`;

export const TitleWrap = styled.div`
  margin-bottom: 40px;
  margin-right: 170px;

  h1 {
    color: #fff;
    font-size: 24px;
    font-family: 'GangwonEduSaeeum OTF';
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
  }

  @media (min-width: 1170px) {
    margin-top: 250px;
    display: flex;
    align-self: flex-start;
    margin-bottom: 120px;
    h1 {
      font-size: 70px;
    }
  }

  @media (min-width: 1080px) {
    margin-top: 300px;
    display: flex;
    align-self: flex-start;
    margin-bottom: 80px;
    h1 {
      font-size: 60px;
    }
  }
`;

export const BackWrap = styled.div`
  background-color: #f7eee7;
  width: 300px;
  height: 330px;
  padding: 20px;
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (min-width: 1170px) {
    width: 940px;
    height: 1060px;
    border-radius: 40px;
  }

  @media (min-width: 1080px) {
    width: 900px;
    height: 1030px;
    border-radius: 40px;
  }
`;

export const Frame = styled.div`
  border: 1.6px dashed rgba(255, 119, 119, 0.8);
  border-radius: 20px;
  width: 322px;
  height: 375px;

  @media (min-width: 1170px) {
    border-width: 6.5px;
    border-radius: 40px;
    width: 930px;
    height: 1120px;
  }

  @media (min-width: 1080px) {
    border-width: 6.5px;
    border-radius: 40px;
    width: 900px;
    height: 1090px;
  }
`;

export const IconImage = styled.img`
  z-index: 10;
  width: 70px;
  height: 70px;
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 1170px) {
    width: 180px;
    height: 180px;
    top: -100px;
  }

  @media (min-width: 1080px) {
    width: 150px;
    height: 150px;
    top: -80px;
  }
`;

export const InputWrap = styled.div`
  width: 100%;
  margin-top: auto;
  z-index: 1;
`;

export const contentInput = styled.textarea`
  width: 90%;
  height: auto;
  min-height: 300px;
  padding: 30px 0 0 0;
  border: none;
  background: transparent;
  font-size: 24px;
  font-family: 'GangwonEduSaeeum OTF';
  color: #3d3332;
  box-sizing: border-box;
  resize: none;
  overflow-y: auto;

  &::placeholder {
    font-size: 24px;
    color: #a9a9a9;
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 1170px) {
    font-size: 60px;
    padding: 80px 0 0 0;
    min-height: 800px;

    &::placeholder {
      font-size: 60px;
    }
  }

  @media (min-width: 1080px) {
    font-size: 50px;
    padding: 60px 0 0 0;
    min-height: 700px;

    &::placeholder {
      font-size: 50px;
    }
  }
`;

export const NameWrap = styled.div`
  position: relative;
  margin-top: 25px;
  background-color: #f7eee7;
  width: 300px;
  height: 15px;
  padding: 20px;
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 1170px) {
    margin-top: 50px;
    width: 940px;
    height: 120px;
    border-radius: 100px;
    margin-bottom: 150px;
  }

  @media (min-width: 1080px) {
    margin-top: 50px;
    width: 900px;
    height: 120px;
    border-radius: 100px;
    margin-bottom: 150px;
  }
`;

export const NameInput = styled.textarea`
  width: 90%;
  height: 25px;
  text-align: center;
  border: none;
  background: transparent;
  font-size: 24px;
  font-family: 'GangwonEduSaeeum OTF';
  color: #3d3332;
  box-sizing: border-box;
  resize: none;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-top: -10px;

  &::placeholder {
    margin-top: -10px;
    font-size: 24px;
    color: #a9a9a9;
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 1170px) {
    font-size: 60px;
    height: 80px;
    &::placeholder {
      font-size: 60px;
    }
  }

  @media (min-width: 1080px) {
    font-size: 50px;
    height: 60px;
    &::placeholder {
      font-size: 50px;
    }
  }
`;

export const ShowWrap = styled.div`
  margin-top: 30px;
  background-color: #ffffff;
  width: 300px;
  height: 20px;
  top: 50px;
  padding: 20px;
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (min-width: 1170px) {
    width: 940px;
    height: 120px;
    border-radius: 100px;
  }

  @media (min-width: 1080px) {
    width: 900px;
    height: 120px;
    border-radius: 100px;
  }
`;

export const ShowSpan = styled.span`
  color: #3d3332;
  font-weight: bold;
  font-size: 20px;

  @media (min-width: 1170px) {
    font-size: 60px;
  }

  @media (min-width: 1080px) {
    font-size: 50px;
  }
`;
