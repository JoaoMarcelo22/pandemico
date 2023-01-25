"use strict";
exports.id = 948;
exports.ids = [948];
exports.modules = {

/***/ 9701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Footer/styles.ts

const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-37d3758b-0"
})`
width: auto;
height: 100px;

display: flex;
justify-content: space-between;

background-color: rgba(0, 0, 0, 0.329);
@media only screen and (max-width: 1000px) {
    display:flex;
    flex-direction:column;

    padding-top:5px;
    border-top:2px solid rgb(14,198,201,0.2);
}

`;
const ContainerSecundary = external_styled_components_default().div.withConfig({
    componentId: "sc-37d3758b-1"
})`
display: flex;
align-content: center;
align-items: center;

@media only screen and (min-width: 1000px) {
    margin: auto 20px;
}

`;
const ContainerSocial = external_styled_components_default().div.withConfig({
    componentId: "sc-37d3758b-2"
})`
display: flex;

`;
const ContainerText = external_styled_components_default().div.withConfig({
    componentId: "sc-37d3758b-3"
})`
display:flex;
`;
const Text = external_styled_components_default().p.withConfig({
    componentId: "sc-37d3758b-4"
})`
display: inline-block;
text-aling:center;

margin:auto;
margin-left:12px;

font-size:12px;
line-height:1.6;

color:#10898b;
`;
const List = external_styled_components_default().ul.withConfig({
    componentId: "sc-37d3758b-5"
})`
margin:auto 12px;
padding:0px 0px 20px 0px;
@media only screen and (max-width: 1000px) {
    display:flex;
}
`;
const Li = external_styled_components_default().li.withConfig({
    componentId: "sc-37d3758b-6"
})`
margin: auto;
margin-left:15px;
list-style-type: none;
`;
const Icone = external_styled_components_default().img.withConfig({
    componentId: "sc-37d3758b-7"
})`
widht:30px;
height:30px;

margin-left:10px;
padding-top:6px; 
`;
const RedeSocial = external_styled_components_default().a.withConfig({
    componentId: "sc-37d3758b-8"
})`
`;

;// CONCATENATED MODULE: ./src/components/Footer/index.tsx



function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ContainerSecundary, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Text, {
                    children: [
                        "Pagina para apaixonados e amantes da cultura Zumbi, temos conteudos que abramgem diversos temas, virus, bacterias e deferentes tipos de catastrofe, Salve-Se!",
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        "\xa9 Copyright Todos os direitos reservados a Jubileu 2023"
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ContainerSecundary, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContainerText, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                            children: "Acesse as nossas redes sociais:"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(List, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Li, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(RedeSocial, {
                                        href: "https://twitter.com/",
                                        target: "_blank",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContainerSocial, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                                                    children: "Twitter"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Icone, {
                                                    src: "assets/twitter.svg"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(RedeSocial, {
                                        href: "https://www.instagram.com/",
                                        target: "_blank",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContainerSocial, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                                                    children: "Instagram"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Icone, {
                                                    src: "assets/instagram.svg"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(RedeSocial, {
                                        href: "https://pt-br.facebook.com/",
                                        target: "_blank",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContainerSocial, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                                                    children: "facebook"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Icone, {
                                                    src: "assets/facebook.svg"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 6363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Nav)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/ButtonNav/styles.ts

const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-bd4bd590-0"
})`
display: flex;
flex-direction: row;

margin: auto 2px;
padding: 1px;

`;
const Titulo = external_styled_components_default().a.withConfig({
    componentId: "sc-bd4bd590-1"
})`
min-width: 99px;
height: 50px;

display: flex;
justify-content: center;
text-aling: center;

margin: auto;
padding: 15px;

font-size: 18px;
font-weight: 900;
letter-spacing: 1px;

color: #10898b;
background-color:rgb(14,198,201,0.1);

cursor: pointer;
text-decoration: none;

border-radius: 8px;
border: solid 2px #10898b;



:hover{
    color:rgb(265,265,265,0.8);
    background-color:rgb(14,198,201,0.7);
    
    border:none;
}
`;

;// CONCATENATED MODULE: ./src/components/ButtonNav/index.tsx



const Button = ({ label , ...rest })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Container, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Titulo, {
            href: "#",
            target: "_blank",
            children: label
        })
    });
};
/* harmony default export */ const ButtonNav = (Button);

;// CONCATENATED MODULE: ./src/styles/globalFont.ts

const GlobalFont = external_styled_components_.css`
    @font-face{
        font-family: "Lobster";
        font-weight: 400;
        src: local("Lobster"), url("/fonts/Lobster/Lobster-Regular.ttf") format("truetype")
    }

`;

;// CONCATENATED MODULE: ./src/components/Nav/styles.ts


const styles_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-eedcd5fb-0"
})`
width: 100%;
height: 100px;

display: flex;
align-content: center;
justify-content: space-evenly;

background-color: rgba(0, 0, 0, 0.329);
`;
const ContainerSearch = external_styled_components_default().div.withConfig({
    componentId: "sc-eedcd5fb-1"
})`
display: flex;
aling-items: center;

padding: 20px;
`;
const ContainerStart = external_styled_components_default().div.withConfig({
    componentId: "sc-eedcd5fb-2"
})`
display: flex;
aling-items: center;

margin:auto 5px auto 20px;
`;
const ContainerEnd = external_styled_components_default().div.withConfig({
    componentId: "sc-eedcd5fb-3"
})`
display: flex;
aling-items: center;

margin:auto 5px auto auto;
`;
const styles_Titulo = external_styled_components_default().p.withConfig({
    componentId: "sc-eedcd5fb-4"
})`
${GlobalFont}
min-width: 20px;

text-aling:center;

margin: auto 20px auto auto;

color:#10898b;
font-size: 45px;
font-family: "Lobster";
`;
const Search = external_styled_components_default().img.withConfig({
    componentId: "sc-eedcd5fb-5"
})`
height: 38px;

margin: auto 5px;
`;
const LoginImg = external_styled_components_default().img.withConfig({
    componentId: "sc-eedcd5fb-6"
})`
height: 40px;

margin: auto;
margin-right: 35px;
`;

;// CONCATENATED MODULE: ./src/components/Nav/index.tsx





function Nav() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContainerStart, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(styles_Titulo, {
                        children: "Pand\xeamico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonNav, {
                            label: "In\xedcio"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/series",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonNav, {
                            label: "S\xe9ries"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/movies",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonNav, {
                            label: "Filmes"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/animes",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonNav, {
                            label: "Animes"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/more",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonNav, {
                            label: "Saiba +"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContainerEnd, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ContainerSearch, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Search, {
                            src: "/assets/lupa.png"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(LoginImg, {
                        src: "/assets/login2.png"
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;