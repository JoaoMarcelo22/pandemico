"use strict";
exports.id = 817;
exports.ids = [817];
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

const Container = (external_styled_components_default()).div`
width: 100%;
height: 100px;

padding:20px;

display: flex;
flex-direction: row;

align-content: center;
justify-content: space-evenly;
background-color: rgba(0, 0, 0, 0.329);

`;
const ContainerSecundary = (external_styled_components_default()).div`
display: flex;
margin: auto;
align-content: center;
align-items: center;
flex-basis: 33%;
`;
const ContainerSocial = (external_styled_components_default()).div`
display: flex;

`;
const ContainerText = (external_styled_components_default()).div`


`;
const Text = (external_styled_components_default()).p`
display: inline-block;
text-aling:center;
font-size:12px;
margin:auto;
color:#10898b;
`;
const List = (external_styled_components_default()).ul`
`;
const Li = (external_styled_components_default()).li`
margin: auto 20px;
list-style-type: none;
`;
const Icone = (external_styled_components_default()).img`
margin-left:10px;
padding-top:6px; 
height:30px;
widht:30px;
`;

;// CONCATENATED MODULE: ./src/components/Footer/index.tsx



function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ContainerSecundary, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                    children: "Pagina para apaixonados e amantes da cultura Zumbi, temos conteudos que abramgem diversos temas, virus, bacterias e deferentes tipos de catastrofe, Salve-Se!"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ContainerSecundary, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                    children: "copyright @Jubileu"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContainerSecundary, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Text, {
                        children: [
                            "Acesse as nossas ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            " redes sociais:"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(List, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Li, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContainerSocial, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                                            children: "Twitter"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Icone, {
                                            src: "assets/twitter.svg"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContainerSocial, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                                            children: "Instagram"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Icone, {
                                            src: "assets/instagram.svg"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContainerSocial, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                                            children: "facebook"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Icone, {
                                            src: "assets/facebook.svg"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 6449:
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
;// CONCATENATED MODULE: ./src/components/Button/styles.ts

const Container = (external_styled_components_default()).div`
display: flex;
flex-direction: row;
padding: 1px;
margin: auto 2px;

`;
const Titulo = (external_styled_components_default()).a`
display: flex;
justify-content: center;
font-size: 18px;
font-weight: 900;
color: #10898b;
cursor: pointer;
text-aling: center;
margin: auto;
padding: 15px;
letter-spacing: 1px;

border-radius: 5px;
border: solid 2px #10898b;


height: 50px;
min-width: 97px;
`;

;// CONCATENATED MODULE: ./src/components/Button/index.tsx



const Button = ({ label , ...rest })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Container, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Titulo, {
            href: "https://github.com/JoaoMarcelo22/pandemico",
            target: "_blank",
            children: label
        })
    });
};
/* harmony default export */ const components_Button = (Button);

;// CONCATENATED MODULE: ./src/styles/globalFont.ts

const GlobalFont = external_styled_components_.css`
    @font-face{
        font-family: "Lobster";
        font-weight: 400;
        src: local("Lobster"), url("/fonts/Lobster/Lobster-Regular.ttf") format("truetype")
    }

`;

;// CONCATENATED MODULE: ./src/components/Nav/styles.ts


const styles_Container = (external_styled_components_default()).div`
display: flex;
align-content: center;
justify-content: space-evenly;
background-color: rgba(0, 0, 0, 0.329);

height: 100px;
width: 100%;
`;
const ContainerSearch = (external_styled_components_default()).div`
display: flex;
aling-items: center;
padding: 20px;
`;
const ContainerStart = (external_styled_components_default()).div`
display: flex;
aling-items: center;
margin:auto 5px auto 20px;
`;
const ContainerEnd = (external_styled_components_default()).div`
display: flex;
aling-items: center;
margin:auto 5px auto auto;
`;
const styles_Titulo = (external_styled_components_default()).p`
${GlobalFont}
text-aling:center;
color:#10898b;
font-size: 45px;
margin: auto 20px auto auto;

font-family: "Lobster";
min-width: 200px;
`;
const Search = (external_styled_components_default()).img`
margin: auto 5px;
height: 40px;
`;
const LoginImg = (external_styled_components_default()).img`
margin: auto;
margin-right: 35px;
height: 40px;
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
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_Button, {
                            label: "In\xedcio"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/series",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_Button, {
                            label: "S\xe9ries"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/movies",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_Button, {
                            label: "Filmes"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/animes",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_Button, {
                            label: "Animes"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/more",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_Button, {
                            label: "Saiba +"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContainerEnd, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ContainerSearch, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Search, {
                            src: "/assets/search.svg"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(LoginImg, {
                        src: "/assets/login.svg"
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;