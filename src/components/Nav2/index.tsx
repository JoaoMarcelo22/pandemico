import { Toolbar, AppBar, Container, Hidden, IconButton, MenuItem, SwipeableDrawer, List, ListItem } from "@mui/material"
import Link from "next/link"
import React, { useState } from "react"
import Button from "../ButtonNav";
import * as S from "./styles"

const navigationLinks = [
    { name: "Início", href: "/" },
    { name: "Séries", href: "/series" },
    { name: "Filmes", href: "/movies" },
    { name: "Animes", href: "/animes" },
    { name: "Saiba +", href: "/more" },
]
const navigationIcons =[
    { src: "/assets/lupa.png"},
    { src: "/assets/login2.png"}
]

export default function Nav2() {
    return (
        <S.Container>
            <S.ContainerStart>
                <S.Titulo>Pandêmico</S.Titulo>
            <Hidden xsDown>
                {navigationLinks.map((item) => (
                    <Link href={item.href}>
                        <Button label={item.name}>
                        </Button>
                    </Link>
                ))}
            </Hidden>
            </S.ContainerStart>
            <S.ContainerEnd>
                {navigationIcons.map((item) => (
                    <S.LoginImg src={item.src}/>
                ))}
            </S.ContainerEnd>
        </S.Container>

    )
}