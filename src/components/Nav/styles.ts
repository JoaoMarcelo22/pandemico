import styled from "styled-components";
import { GlobalFont } from "../../styles/globalFont";

export const Container = styled.div`
display: flex;
align-content: center;
justify-content: space-evenly;
background-color: rgba(0, 0, 0, 0.329);

height: 100px;
width: 100%;
`
export const ContainerSearch = styled.div`
display: flex;
aling-items: center;
padding: 20px;
`
export const ContainerStart = styled.div`
display: flex;
aling-items: center;
margin:auto 5px auto 20px;
`

export const ContainerEnd = styled.div`
display: flex;
aling-items: center;
margin:auto 5px auto auto;
`

export const Titulo =styled.p`
${GlobalFont}
text-aling:center;
color:#10898b;
font-size: 45px;
margin: auto 20px auto auto;

font-family: "Lobster";
min-width: 200px;
`
export const Search = styled.img`
margin: auto 5px;
height: 40px;
`
export const LoginImg = styled.img`
margin: auto;
margin-right: 35px;
height: 40px;
`