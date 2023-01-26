
import React from "react"
import * as S from "./styles"

interface BoxComponentProps {
    text: string;
    local:string;

}
const Box: React.FC<BoxComponentProps> = ({
    text,
    local,
    ...rest
}) => {
    return (
        <S.ContainerTerciary>
            <S.ContainerSecundary>
                <S.Img src={local}></S.Img>
            </S.ContainerSecundary>
            <S.Text>
                {text}
            </S.Text>
        </S.ContainerTerciary>
    );
};
export default Box;