import styled from "styled-components";
import { GlobalFont } from "../../styles/globalFont";

export const Container = styled.div`
width: 100%;
height: 100px;

display: flex;
align-content: center;
justify-content: space-evenly;

background-color: rgba(0, 0, 0, 0.329);

#nested-list-subheader{
    font-size:18px;
    margin:auto;
}
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

@media only screen and (max-width: 1000px) {
    margin-top: 24px;
}
`

export const Titulo =styled.p`
${GlobalFont}
min-width: 20px;

text-aling:center;

margin: auto 20px auto auto;

color:#10898b;
font-size: 45px;
font-family: "Lobster";

@media only screen and (max-width: 1000px) {
    margin: 0px;
}
`
export const LoginImg = styled.img`
height: 40px;

margin: auto 35px auto -10px;;
margin-right: 35px;

@media only screen and (max-width: 1000px) {
    margin: 10px;
}

`
export const Container2 = styled.div`
display: flex;
flex-direction: row;

margin: auto 2px;
padding: 1px;

`
export const Button = styled.button`
background-color: transparent;
  border: none;
  cursor: pointer;
`

export const Imagem = styled.img`
  width: 50px;
  height: 50px;
`
