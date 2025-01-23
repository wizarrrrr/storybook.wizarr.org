import{d as N,f as w,o as D,g as F,m as W}from"./vue.esm-bundler-cf0c3429.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";const C=N({name:"Button",props:{label:{type:String,default:"Button",required:!1},help:{type:String,default:"",required:!1},prefixIcon:{type:String,default:"",required:!1},suffixIcon:{type:String,default:"",required:!1},dataTheme:{type:String,default:"primary",required:!1},disabled:{type:Boolean,default:!1,required:!1},onClick:{type:Function,default:()=>{},required:!1}},computed:{attrs(){return{label:this.label,help:this.help,prefixIcon:this.prefixIcon,suffixIcon:this.suffixIcon,"data-theme":this.dataTheme,disabled:this.disabled,onClick:this.onClick}}}});function z(P,E,M,A,G,H){const V=w("FormKit");return D(),F(V,W({type:"button"},P.attrs),null,16)}const O=$(C,[["render",z]]);C.__docgenInfo={displayName:"Button",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"Button"'}},{name:"help",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"prefixIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"suffixIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"dataTheme",type:{name:"String as () => Theme"},required:!1,defaultValue:{func:!1,value:'"primary"'}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"onClick",type:{name:"func"},required:!1,defaultValue:{func:!0,value:"() => {}"}}],sourceFiles:["/home/coder/wizarr/apps/wizarr-frontend/src/stories/Button.vue"]};const j={title:"Button",component:O,argTypes:{dataTheme:{options:["primary","secondary","success","danger","warning","transparent","none"],control:{type:"select"}},onClick:{action:"onClick"}}},e={args:{label:"Primary",dataTheme:"primary"}},a={args:{label:"Secondary",dataTheme:"secondary"}},r={args:{label:"Success",dataTheme:"success"}},n={args:{label:"Danger",dataTheme:"danger"}},s={args:{label:"Warning",dataTheme:"warning"}},t={args:{label:"Transparent",dataTheme:"transparent"}},o={args:{label:"None",dataTheme:"none"}};var l,c,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: "Primary",
    dataTheme: "primary"
  }
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,i,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Secondary",
    dataTheme: "secondary"
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,f,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Success",
    dataTheme: "success"
  }
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,h,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Danger",
    dataTheme: "danger"
  }
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var S,T,_;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "Warning",
    dataTheme: "warning"
  }
}`,...(_=(T=s.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var q,x,B;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: "Transparent",
    dataTheme: "transparent"
  }
}`,...(B=(x=t.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var v,I,k;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "None",
    dataTheme: "none"
  }
}`,...(k=(I=o.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};const K=["Primary","Secondary","Success","Danger","Warning","Transparent","None"],Q=Object.freeze(Object.defineProperty({__proto__:null,Danger:n,None:o,Primary:e,Secondary:a,Success:r,Transparent:t,Warning:s,__namedExportsOrder:K,default:j},Symbol.toStringTag,{value:"Module"}));export{Q as B,e as P,a as S};
