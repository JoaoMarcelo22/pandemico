"use strict";
exports.id = 687;
exports.ids = [687];
exports.modules = {

/***/ 8496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Main)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Box/styles.ts

const ContainerSecundary = external_styled_components_default().div.withConfig({
    componentId: "sc-67d381a1-0"
})`
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
`;
const ContainerTerciary = external_styled_components_default().div.withConfig({
    componentId: "sc-67d381a1-1"
})`
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

`;
const Text = external_styled_components_default().p.withConfig({
    componentId: "sc-67d381a1-2"
})`
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
`;
const Img = external_styled_components_default().img.withConfig({
    componentId: "sc-67d381a1-3"
})`
width:150px;
height:150px;

border-radius:10px;
@media only screen and (max-width: 1000px) {
    width:95%;
    height:95%;
}

`;

;// CONCATENATED MODULE: ./src/components/Box/index.tsx



const Box = ({ text , local , ...rest })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContainerTerciary, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ContainerSecundary, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Img, {
                    src: local
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                children: text
            })
        ]
    });
};
/* harmony default export */ const components_Box = (Box);

;// CONCATENATED MODULE: ./src/components/Main/styles.ts

const ContainerCenter = external_styled_components_default().div.withConfig({
    componentId: "sc-8f78fdf2-0"
})`
width:100%;
height:auto;

padding:50px;

background-color:rgba(0, 0, 0, 0.329);
@media only screen and (max-width: 1000px) {
    margin:0px;
    padding:0px;
}
`;
const styles_ContainerSecundary = external_styled_components_default().div.withConfig({
    componentId: "sc-8f78fdf2-1"
})`
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
`;
const styles_ContainerTerciary = external_styled_components_default().div.withConfig({
    componentId: "sc-8f78fdf2-2"
})`
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

`;
const styles_Text = external_styled_components_default().p.withConfig({
    componentId: "sc-8f78fdf2-3"
})`
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
`;
const styles_Img = external_styled_components_default().img.withConfig({
    componentId: "sc-8f78fdf2-4"
})`
width:150px;
height:150px;

border-radius:10px;
@media only screen and (max-width: 1000px) {
    width:95%;
    height:95%;
}

`;

;// CONCATENATED MODULE: ./src/components/Main/index.tsx



const Main = ({ text , text2 , img , img2 , ...rest })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContainerCenter, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(components_Box, {
                    text: text,
                    local: img
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_Box, {
                    text: text2,
                    local: img2
                })
            ]
        })
    });
};
/* harmony default export */ const components_Main = (Main);


/***/ }),

/***/ 8470:
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
// EXTERNAL MODULE: ./src/components/ButtonNav/index.tsx + 1 modules
var ButtonNav = __webpack_require__(102);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/styles/globalFont.ts
var globalFont = __webpack_require__(247);
;// CONCATENATED MODULE: ./src/components/Nav/styles.ts


const Container = external_styled_components_default().div.withConfig({
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
const Titulo = external_styled_components_default().p.withConfig({
    componentId: "sc-eedcd5fb-4"
})`
${globalFont/* GlobalFont */.u}
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContainerStart, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Titulo, {
                        children: "Pand\xeamico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonNav/* default */.Z, {
                            label: "In\xedcio"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/series",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonNav/* default */.Z, {
                            label: "S\xe9ries"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/movies",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonNav/* default */.Z, {
                            label: "Filmes"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/animes",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonNav/* default */.Z, {
                            label: "Animes"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/more",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonNav/* default */.Z, {
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