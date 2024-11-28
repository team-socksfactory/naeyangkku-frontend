import styled from 'styled-components';

export const LetterWrap = styled.div`
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
`;

export const BackWrap = styled.div`
  background-color: #f7eee7;
  width: 300px;
  height: 400px;
  padding: 20px;
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const Frame = styled.div`
  border: 1.6px dashed rgba(255, 119, 119, 0.8);
  border-radius: 20px;
  width: 100%;
  height: 100%;
`;

export const IconImage = styled.img`
  z-index: 10;
  width: 70px;
  height: 70px;
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
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
    font-size: 20px;
    color: #a9a9a9;
  }

  &:focus {
    outline: none;
  }
`;

export const NameInput = styled.textarea`
  width: 90%;
  height: 24px;
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
  margin-left: 15px;
  margin-top: -10px;

  &:focus {
    outline: none;
  }
`;
