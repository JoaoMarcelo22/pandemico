"use strict";
exports.id = 496;
exports.ids = [496];
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


/***/ })

};
;