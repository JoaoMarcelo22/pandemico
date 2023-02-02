import { Divider, List, ListItem, ListItemText, useMediaQuery } from "@mui/material"
import Link from "next/link"
import React, { useState } from "react"
import ButtonHamburger from "../ButtonHamburger";
import Button from "../ButtonNav";
import NavModal from "../Modais/NavModal";
import * as S from "./styles"


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

    const [open, isOpen] = useState(false);

    const openModal = () => {
        isOpen(!open);
        console.log(open)
    }
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
                <S.Container2>
                  {open===false &&<S.Button>
                        <S.Imagem src="/assets/menu-hamburger.png" alt="Imagem menu" onClick={openModal} />
                    </S.Button>}
                </S.Container2>
            </S.ContainerEnd>
            <NavModal isOpen={open} />
        </S.Container>
    )
}