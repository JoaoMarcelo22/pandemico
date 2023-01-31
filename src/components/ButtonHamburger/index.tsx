import { ButtonProps } from "@mui/material"
import React, { useState } from "react"
import * as S from "./styles"

interface ButtonHamburgerComponentProps extends ButtonProps{
}
const ButtonHamburger: React.FC<ButtonHamburgerComponentProps>=({
}) => {
    const [open,isOpen] = useState(false);
    
    const openModal = () =>{
        isOpen(!open);
        console.log(open)
    }
    return(
        <S.Container>
            <S.Button>
                <S.Imagem src="/assets/menu-hamburger.png"  alt="Imagem menu" onClick={openModal}/>
            </S.Button>
        </S.Container>
    );
};
export default ButtonHamburger;