import * as S from "./styles"
import { Button, Divider, List, ListItem, ListItemText } from "@mui/material";
import React from "react"
import Link from "next/link";

interface NavModalComponentProps {
    isOpen:boolean;
}
const NavModal: React.FC<NavModalComponentProps> = ({
    isOpen,
}) => {
    const navigationLinks = [
        { name: "Início", href: "/" },
        { name: "Séries", href: "/series" },
        { name: "Filmes", href: "/movies" },
        { name: "Animes", href: "/animes" },
        { name: "Saiba +", href: "/more" },
    ]
    const navigationLinksNav = [
        { name: "Início", href: "#", src:"/assets/login2.png"},
        { name: "Séries", href: "#", src:"/assets/lupa.png"},
    ]
if(!isOpen) return <>
</>
return (
        <S.Container>
            <List component="button" aria-label="mailbox folders">
                {navigationLinksNav.map((item) => (
                    <Link href={item.href}>
                        <ListItem >
                            <S.LoginImg src={item.src}/>
                            <ListItemText primary={item.name} />
                        </ListItem>
                    </Link>
                ))}
                {navigationLinks.map((item) => (
                    <Link href={item.href}>
                        <ListItem >
                        <ListItemText primary={item.name} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </S.Container>
    );
};
export default NavModal;