import React from "react"
import Button from "../Button"
import * as S from "./styles"

export default function Footer() {
    return (
        <S.Container>
            <S.ContainerSecundary>
                <S.Text>Pagina para apaixonados e amantes da cultura Zumbi,
                     temos conteudos que abramgem diversos temas, virus, bacterias 
                     e deferentes tipos de catastrofe, Salve-Se!</S.Text>
            </S.ContainerSecundary>
            <S.ContainerSecundary>
                <S.Text>copyright @JUBILEU</S.Text>
            </S.ContainerSecundary>
            <S.ContainerSecundary>
                <S.Text>Acesse as nossas redes sociais:</S.Text>
                <S.List>
                    <S.Li>
                        <S.ContainerSocial>
                            <S.Text>Twitter</S.Text>
                            <S.Icone src="../twitter.svg" />
                        </S.ContainerSocial>
                        <S.ContainerSocial>
                            <S.Text>Instagram</S.Text>
                            <S.Icone src="../instagram.svg" />
                        </S.ContainerSocial>
                        <S.ContainerSocial>
                            <S.Text>facebook</S.Text>
                            <S.Icone src="../facebook.svg" />
                        </S.ContainerSocial>
                    </S.Li>
                </S.List>
            </S.ContainerSecundary>
        </S.Container>
    )
}