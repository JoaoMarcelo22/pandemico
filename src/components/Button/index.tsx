import { ButtonProps } from "@mui/material"
import React from "react"
import * as S from "./styles"

interface ButtonComponentProps extends ButtonProps{
    label: string;
}
const Button: React.FC<ButtonComponentProps>=({
    label,
    ...rest
}) => {
    return(
        <S.Container>
            <S.Titulo href="https://github.com/JoaoMarcelo22/pandemico" target="_blank">{label}</S.Titulo>
        </S.Container>
    );
};
export default Button;