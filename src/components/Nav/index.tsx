import Link from "next/link"
import React from "react"
import Button from "../Button"
import * as S from "./styles"

export default function Nav() {
    return (
        <S.Container>
            <S.ContainerStart>
                <S.Titulo>Pandêmico</S.Titulo>
                <Link href="/"><Button label={"Início"} /></Link>
                <Link href="/series"><Button label={"Séries"} /></Link>
                <Link href="/movies"><Button label={"Filmes"} /></Link>
                <Link href="/animes"><Button label={"Animes"} /></Link>
                <Link href="/more"><Button label={"Saiba +"} /></Link>
            </S.ContainerStart>
            <S.ContainerEnd>
                <S.ContainerSearch>
                    <S.Pesquisa />
                    <S.Search src="../search.svg"></S.Search>
                </S.ContainerSearch>
                <S.LoginImg src="../login.svg"></S.LoginImg>
            </S.ContainerEnd>
        </S.Container>
    )
}