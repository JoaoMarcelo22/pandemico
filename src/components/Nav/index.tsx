import React from "react"
import Button from "../Button"
import * as S from "./styles"

export default function Nav() {
    return (
        <S.Container>
            <S.Titulo>pandêmico</S.Titulo>
            <Button label={"Início"} />
            <Button label={"Séries"} />
            <Button label={"Filmes"} />
            <Button label={"Animes"} />
            <Button label={"Saiba +"} />
            <S.ContainerSearch>
                <S.Pesquisa />
                <S.Search src="../search.svg"></S.Search>
            </S.ContainerSearch>
            <S.LoginImg src="../login.svg"></S.LoginImg>
        </S.Container>
    )
}