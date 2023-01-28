import { Divider, List, ListItem, ListItemText, useMediaQuery } from "@mui/material"
import Link from "next/link"
import React, { useState } from "react"
import Button from "../ButtonNav";
import * as S from "./styles"

//const [open,SetOpen] = useState(true)

const navigationLinks = [
    { name: "Início", href: "/" },
    { name: "Séries", href: "/series" },
    { name: "Filmes", href: "/movies" },
    { name: "Animes", href: "/animes" },
    { name: "Saiba +", href: "/more" },
]
const navigationIcons = [
    { src: "/assets/lupa.png" },
    { src: "/assets/login2.png" }
]

export default function Nav2() {
    const dowm = useMediaQuery('(min-width:1000px)');
    const up = useMediaQuery('(max-width:1000px),(margin:0px)');


    return (
        <S.Container>
            <S.ContainerStart>
                <S.Titulo>Pandêmico</S.Titulo>

                {navigationLinks.map((item) => (
                    <Link href={item.href}>
                        {dowm && <Button label={item.name} />}
                    </Link>
                ))}
            </S.ContainerStart>
            <S.ContainerEnd>
                {navigationIcons.map((item) => (
                    <>
                        {dowm && <S.LoginImg src={item.src} />}
                    </>
                ))}
                {up && <S.LoginImg src="/assets/menu-hamburger.png" />}
            </S.ContainerEnd>
            {dowm &&<List component="button" aria-label="mailbox folders">
                <ListItem >
                    <S.LoginImg src="/assets/login2.png" />
                    <ListItemText primary="Login" />
                </ListItem>
                <ListItem divider>
                    <S.LoginImg src="/assets/lupa.png" />
                    <ListItemText primary="Busca" />
                </ListItem>
                <ListItem >
                    <ListItemText primary="Início" />
                </ListItem>
                <Divider />
                <ListItem divider>
                    <ListItemText primary="Séries" />
                </ListItem>
                <ListItem divider>
                    <ListItemText primary="Filmes" />
                </ListItem>
                <ListItem divider>
                    <ListItemText primary="Animes" />
                </ListItem>
                <ListItem divider>
                    <ListItemText primary="Criar Post" />
                </ListItem>
            </List>}
        </S.Container>


    )
}