import{d as E,b as L}from"./vue.esm-bundler-cf0c3429.js";import{F as N}from"./index-a6f743cd.js";const j={title:"FormKit",component:E({render(){return L(N,this.$attrs,null)}})},e={label:"Label",help:""},r={args:{type:"button","data-theme":"primary",...e},argTypes:{"data-theme":{options:["primary","secondary","success","danger","warning","transparent","none"],control:{type:"select"}},onClick:{action:"onClick"}}},a={args:{type:"text",placeholder:"Placeholder",...e},argTypes:{type:{options:["text","email","password","number","tel","url","search","textarea"],control:{type:"select"}}}},o={args:{type:"select",options:["Option 1","Option 2","Option 3"],...e},argTypes:{options:{control:{type:"array"}}}},t={args:{type:"checkbox",...e}},n={args:{type:"radio",options:["Option 1","Option 2","Option 3"],...e}},s={args:{type:"toggle",...e}},p={args:{type:"rating",...e}},c={args:{type:"range",...e}};var l,g,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: "button",
    "data-theme": "primary",
    ...globalArgs
  },
  argTypes: {
    "data-theme": {
      options: ["primary", "secondary", "success", "danger", "warning", "transparent", "none"],
      control: {
        type: "select"
      }
    },
    onClick: {
      action: "onClick"
    }
  }
}`,...(i=(g=r.parameters)==null?void 0:g.docs)==null?void 0:i.source}}};var m,d,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: "text",
    placeholder: "Placeholder",
    ...globalArgs
  },
  argTypes: {
    type: {
      options: ["text", "email", "password", "number", "tel", "url", "search", "textarea"],
      control: {
        type: "select"
      }
    }
  }
}`,...(y=(d=a.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,b,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: "select",
    options: ["Option 1", "Option 2", "Option 3"] as any,
    ...globalArgs
  },
  argTypes: {
    options: {
      control: {
        type: "array"
      }
    }
  }
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,O,S;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: "checkbox",
    ...globalArgs
  }
}`,...(S=(O=t.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var T,A,k;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: "radio",
    options: ["Option 1", "Option 2", "Option 3"] as any,
    ...globalArgs
  }
}`,...(k=(A=n.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var C,R,f;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: "toggle",
    ...globalArgs
  }
}`,...(f=(R=s.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var w,F,_;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    type: "rating",
    ...globalArgs
  }
}`,...(_=(F=p.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var B,K,P;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: "range",
    ...globalArgs
  }
}`,...(P=(K=c.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};const q=["Button","Text","Select","Checkbox","Radio","Toggle","Rating","Range"];export{r as Button,t as Checkbox,n as Radio,c as Range,p as Rating,o as Select,a as Text,s as Toggle,q as __namedExportsOrder,j as default};
