"use strict";
exports.id = 449;
exports.ids = [449];
exports.modules = {

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
margin: auto;

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
background-color: #d09a50;
padding: 15px;
letter-spacing: 1px;

border-radius: 5px;
border: solid 1px #10898b;


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

const Lobster = external_styled_components_.css`
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
`;
/* harmony default export */ const globalFont = (Lobster);

;// CONCATENATED MODULE: ./src/components/Nav/styles.ts


const styles_Container = (external_styled_components_default()).div`
display: flex;
align-content: center;
justify-content: space-evenly;
background-color: #e2d9c2;

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
${globalFont}
text-aling:center;
color:#10898b;
font-size: 45px;
margin: auto 20px auto auto;

min-width: 200px;
`;
const Search = (external_styled_components_default()).img`
margin: auto 5px;
height: 40px;
`;
const Pesquisa = (external_styled_components_default()).input`
height:45px;
border-radius:15px;
background-color:#e2d9c2;
margin: auto;
`;
const LoginImg = (external_styled_components_default()).img`
margin: auto 5px;
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
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContainerSearch, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Pesquisa, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(Search, {
                                src: "../search.svg"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(LoginImg, {
                        src: "../login.svg"
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;