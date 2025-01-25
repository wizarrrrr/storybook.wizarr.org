import{d as u,M as f,P as x,e as j,f as p}from"./index-bed19cf4.js";import{B as y,P as _,S as b}from"./button.stories-08eb2541.js";import{u as d}from"./index-e741a067.js";import"./iframe-fb0fed2b.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-38ad35d1.js";import"./index-356e4a49.js";import"./vue.esm-bundler-cf0c3429.js";import"./_plugin-vue_export-helper-c27b6911.js";var l={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=u,O=Symbol.for("react.element"),P=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,S=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function h(t,e,a){var n,o={},i=null,c=null;a!==void 0&&(i=""+a),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(c=e.ref);for(n in e)v.call(e,n)&&!k.hasOwnProperty(n)&&(o[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)o[n]===void 0&&(o[n]=e[n]);return{$$typeof:O,type:t,key:i,ref:c,props:o,_owner:S.current}}s.Fragment=P;s.jsx=h;s.jsxs=h;l.exports=s;var r=l.exports;function m(t){const e=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h2:"h2",pre:"pre",h3:"h3"},d(),t.components);return r.jsxs(r.Fragment,{children:[r.jsx(f,{of:y}),`
`,r.jsx(e.h1,{id:"button",children:"Button"}),`
`,r.jsxs(e.p,{children:["We use ",r.jsx(e.a,{href:"https://formkit.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"FormKit"})," to build our Button components, this makes creating buttons pretty easy. We have a few different types of buttons, but they can all be accessed through the ",r.jsx(e.code,{children:"FormKit"})," component."]}),`
`,r.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-tsx",children:`<FormKit type="button" label="Primary" data-theme="primary" />
`})}),`
`,r.jsx(x,{}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsx(j,{}),`
`,r.jsx(e.h2,{id:"stories",children:"Stories"}),`
`,r.jsx(e.h3,{id:"primary",children:"Primary"}),`
`,r.jsx(e.p,{children:"A button can be of primary importance."}),`
`,r.jsx(p,{of:_}),`
`,r.jsx(e.p,{children:"A button can be of secondary importance."}),`
`,r.jsx(p,{of:b}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{})})]})}function A(t={}){const{wrapper:e}=Object.assign({},d(),t.components);return e?r.jsx(e,Object.assign({},t,{children:r.jsx(m,t)})):m(t)}export{A as default};
