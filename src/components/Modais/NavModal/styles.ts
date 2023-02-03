import styled from "styled-components";
import { Divider, List, ListItem, ListItemText } from "@mui/material";


export const LoginImg = styled.img`
height: 30px;

@media only screen and (max-width: 1000px) {
    margin: 10px;
}`

export const Container =styled.div`
position: absolute;
top: -12px;
right: 45px;
background-color: black;

width: 5rem;

.MuiList-root{
    width: 120px;
    padding: 0px;
    border: 2px solid #10898b;
    background-color: rgba(0, 0, 0, 0.329);
    color: #10898b;
    
    border-radius: 5px;
}
.MuiListItem-root{
    padding: 6px;
    border-bottom: 1px solid;
    border-radius: 2px;
    text-align: center;
}
`
