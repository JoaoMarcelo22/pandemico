import * as S from "./styles"
import { Divider, List, ListItem, ListItemText } from "@mui/material";
import React from "react"

interface NavModalComponentProps {
    isOpen:boolean;

}
const NavModal: React.FC<NavModalComponentProps> = ({
    isOpen,
}) => {

if(!isOpen) return <>
</>
return (
        <>
            <List component="button" aria-label="mailbox folders">
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
            </List>
        </>
    );
};
export default NavModal;