import { Divider, List, ListItem, ListItemText, useMediaQuery } from "@mui/material"
import Link from "next/link"
import React, { useState } from "react"
import Button from "../ButtonNav";
import ButtonModal from "../Modais/ButtonModal";
import NavModal from "../Modais/NavModal";
import * as S from "./styles"


const navigationLinks = [
    { name: "Início", href: "/" },
    { name: "Séries", href: "/series" },
    { name: "Filmes", href: "/movies" },
    { name: "Animes", href: "/animes" },
]
const navigationIcons = [
    { src: "/assets/lupa.png" },
    { src: "/assets/login2.png" }
]

export default function Nav() {
    const dowm = useMediaQuery('(min-width:1000px)');

    const [open, isOpen] = useState(false);
    const [open2, isOpen2] = useState(false);

    const openModal = () => {
        isOpen(!open);
    }
    const openModal2 = () => {
        isOpen2(!open2);
    }
    const close = () =>{
        isOpen(open === false);
        isOpen2(open2 === false);
        console.log(isOpen);
    }
    return (
        <S.Container>
            <S.ContainerStart>
                <S.Titulo>Pandêmico</S.Titulo>
                <S.ContainerMenu>
                    {navigationLinks.map((item) => (
                        <Link href={item.href}>
                            <Button label={item.name} />
                        </Link>
                    ))}
                    <S.opa>
                        <S.Button onClick={openModal2}>
                            <Button label="Saiba +" />
                        </S.Button>
                        <ButtonModal isOpen2={open2} />
                    </S.opa>
                </S.ContainerMenu>
            </S.ContainerStart>
            <S.ContainerEnd>
                {navigationIcons.map((item) => (
                    <>
                        {dowm && <S.LoginImg src={item.src} />}
                    </>
                ))}
                <S.Container2>
                    {open === false && <S.Button>
                        <S.Imagem src="/assets/menu-hamburger.png" alt="Imagem menu" onClick={openModal} />
                    </S.Button>}
                    {open === true && <NavModal isOpen={open} />}
                </S.Container2>
                {open === true && <S.Overlay onClick={close}/>}
            </S.ContainerEnd>
        </S.Container>
    )
}