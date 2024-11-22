import React from "react";
import * as S from "./style";
import SantaImage from "src/assets/img/write/santa.svg";
const Write: React.FC = () => {
    return (
        <S.MainWrap>
            <S.ProgressBar>
                <div className="Progress"></div>
                <S.ProgressText>60%</S.ProgressText>
            </S.ProgressBar>
            <S.TitleWrap>
                <h1>메세지를 남겨주세요!</h1>
            </S.TitleWrap>
            <S.BackWrap>
                <S.IconImage src={SantaImage} alt="Message icon" />
                <S.Frame>
                    <S.InputWrap>
                        <S.contentInput
                            placeholder="마음을 담은 메세지를 입력해주세요."
                        />
                    </S.InputWrap>
                </S.Frame>
            </S.BackWrap>
            <S.NameWrap>
                <S.NameInput
                    placeholder="남길 이름을 입력해주세요."
                />
            </S.NameWrap>
            <S.ShowWrap>
                <S.ShowSpan>미리 보기</S.ShowSpan>
            </S.ShowWrap>
        </S.MainWrap>
    );
}

export default Write;
