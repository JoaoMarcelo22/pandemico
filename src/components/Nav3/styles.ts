import styled from "styled-components";
import { GlobalFont } from "../../styles/globalFont";

export const Container = styled.div`
width: 100%;
height: 100px;

display: flex;
align-content: center;
justify-content: space-evenly;

background-color: rgba(0, 0, 0, 0.329);
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
min-width: 20px;

text-aling:center;

margin: auto 20px auto auto;

color:#10898b;
font-size: 45px;
font-family: "Lobster";
`
export const Search = styled.img`
height: 38px;

margin: auto 5px;
`
export const LoginImg = styled.img`
height: 40px;

margin: auto;
margin-right: 35px;
`