import styled from "styled-components";

export const MainWrap = styled.div`
    position: relative;
    background-color: #3D3332;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    padding-top: 90px;
`;

export const ProgressBar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 18px;
    background: #211B1B;
    display: flex;

    .Progress {
        width: 60%;
        background: #FF7777;
        height: 100%;
        border-radius: 0 10px 10px 0;
    }
`;

export const ProgressText = styled.span`
    position: absolute;
    bottom: -35px;
    right: 7%;
    color: #FFF;
    font-size: 20px;
    font-weight: bold;
    font-family: "GangwonEduSaeeum OTF";
`;

export const TitleWrap = styled.div`
    margin-bottom: 40px;
    margin-right: 170px;

    h1 {
        color: #FFF;
        font-size: 24px;
        font-family: "GangwonEduSaeeum OTF";
        font-style: normal;
        font-weight: 700;
        line-height: 22px;
    }
`;

export const BackWrap = styled.div`
    background-color: #F7EEE7;
    width: 300px;
    height: 330px;
    padding: 20px;
    border-radius: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    //overflow: hidden;
`;

export const Frame = styled.div`
    border: 1.6px dashed rgba(255, 119, 119, 0.8);
    border-radius: 20px;
    width: 322px;
    height: 375px;
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
    font-family: "GangwonEduSaeeum OTF";
    color: #3D3332;
    box-sizing: border-box;
    resize: none;
    overflow-y: auto; 

    &::placeholder {
        font-size: 24px;
        color: #A9A9A9;
    }

    &:focus {
        outline: none;
    }
`;

export const NameWrap = styled.div`
    position: relative;
    margin-top: 25px;
    background-color: #F7EEE7;
    width: 300px;
    height: 15px;
    padding: 20px;
    border-radius: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const NameInput = styled.textarea`
    width: 90%;
    height: 25px;
    text-align: center;
    border: none;
    background: transparent;
    font-size: 24px;
    font-family: "GangwonEduSaeeum OTF";
    color: #3D3332;
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
        color: #A9A9A9;
    }

    &:focus {
        outline: none;
    }
`;


export const ShowWrap = styled.div`
    margin-top: 30px;
    background-color: #FFFFFF;
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
`;

export const ShowSpan = styled.span`
    color: #3D3332;
    font-weight: bold;
    font-size: 20px;
`;
