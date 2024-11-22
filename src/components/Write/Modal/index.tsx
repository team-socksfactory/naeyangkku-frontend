import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./style";
import SantaImage from "src/assets/img/write/santa.svg";

const Modal: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { message, name } = location.state || { message: "", name: "" };

    const handleClose = () => {
        navigate("/");
    };

    return (
        <S.MainWrap>
            <S.ProgressBar>
                <div className="Progress"></div>
                <S.ProgressText>80%</S.ProgressText>
            </S.ProgressBar>
            <S.TitleWrap>
                <h1>메세지를 남겨주세요!</h1>
            </S.TitleWrap>
            <S.BackWrap>
                <S.IconImage src={SantaImage} alt="Message icon" />
                <S.Frame>
                    <S.InputWrap>
                        <S.contentInput value={message} readOnly />
                        <S.NameInput value={`From. ${name}`} readOnly />
                    </S.InputWrap>
                </S.Frame>
            </S.BackWrap>
            <S.ShowWrap>
                <S.ShowSpan onClick={handleClose}>양말 달기</S.ShowSpan>
            </S.ShowWrap>
        </S.MainWrap>
    );
};

export default Modal;
