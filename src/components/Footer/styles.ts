import styled from "styled-components";

export const Container = styled.div`
width: auto;
height: 100px;

display: flex;
justify-content: space-between;

background-color: rgba(0, 0, 0, 0.329);

`
export const ContainerSecundary = styled.div`
display: flex;
align-content: center;
align-items: center;

@media only screen and (min-width: 1000px) {
    margin: auto 20px;
}

`
export const ContainerSocial = styled.div`
display: flex;

`
export const ContainerText = styled.div`
display:flex;
`
export const Text = styled.p`
display: inline-block;
text-aling:center;

margin:auto;
margin-left:12px;

font-size:12px;
line-height:1.6;

color:#10898b;
`
export const List = styled.ul`
margin:auto 12px;
padding:0px 0px 20px 0px;
`
export const Li = styled.li`
margin: auto;
margin-left:15px;
list-style-type: none;
`

export const Icone = styled.img`
widht:30px;
height:30px;

margin-left:10px;
padding-top:6px; 
`

export const RedeSocial = styled.a`
`
