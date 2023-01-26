import styled from "styled-components";

export const ContainerSecundary = styled.div`
width:250px;
height:210px;

margin:5px;
padding:5px;

border-radius:10px;

background-color:#10898b;
@media only screen and (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;

    margin:0px;
    padding:0px;
}
`
export const ContainerTerciary = styled.div`
width:auto;
height:auto;

display:flex;

margin:auto;
margin-bottom:20px;
padding:5px;

border-radius:20px;

background-color:rgb(14,198,201,0.08);

@media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;

    margin:10px 0px;
    padding:10px;
}

`
export const Text = styled.p`
display: inline-block;

margin:auto 10px;

color: gray;

text-aling:justify;
font-size:1.1rem;
line-height: 32px;
@media only screen and (max-width: 1000px) {
    margin:0px;
    padding:0px;
    
    text-align: left;
}
`
export const Img = styled.img`
width:150px;
height:150px;

border-radius:10px;
@media only screen and (max-width: 1000px) {
    width:95%;
    height:95%;
}

`