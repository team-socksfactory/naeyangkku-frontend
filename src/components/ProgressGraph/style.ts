import { NaeYangKkuTheme } from 'src/style/theme';
import styled from 'styled-components';

export const GraphWrap = styled.div`
  width: 100vw;
  height: 2vh;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: flex-start;
  background-color: ${NaeYangKkuTheme.primaryStrong};

  span {
    font-family: 'GangwonEdu Modu';
    color: #fff;
    font-size: 20px;
    height: fit-content;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-top: 6dvb;
  }

  @media (min-width: 1170px) {
    span {
      font-size: 52px;
    }
  }
`;

export const ProgressRate = styled.div`
  width: 20%;
  height: 100%;

  background-color: ${NaeYangKkuTheme.secondlyNormal};
  border-radius: 0 10px 10px 0;

  @media (min-width: 1170px) {
    border-radius: 0 30px 30px 0;
  }
`;

export const RateText = styled.div`
  padding: 28px;
  position: absolute;
  right: 0;
  width: auto;
  height: min-content;

  @media (min-width: 1170px) {
    top: 2vh;
    right: 2vw;
  }
`;
