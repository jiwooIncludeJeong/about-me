(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6634:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return aH}});var d,e,f,g,h=c(4285),i=c(5316),j=c(7191),k=c(7294),l=c(9521),m=c(1758),n=l.default.span.withConfig({displayName:"Span",componentId:"sc-1tbpln1-0"})(["",";",";",";"],function(a){var b=a.fontWeight;return b&&"font-weight: ".concat(b)},function(a){var b=a.fontSize;return b&&"font-size: ".concat(b)},function(a){var b=a.color;return b&&"color: ".concat(b)}),o=c(5893),p=function(a){var b=a.divRef,c=a.isFocused;return(0,o.jsx)(q,{ref:b,children:(0,o.jsx)(s,{isFocused:c,children:(0,o.jsxs)(m.Z,{fontType:"KR/Heading/L/Regular",color:i.Z.white,children:["저는 ",(0,o.jsx)(r,{fontWeight:700,children:"정지우"}),"입니다.",(0,o.jsx)("br",{}),(0,o.jsxs)(n,{fontWeight:200,children:["반복되는 것들의 규칙을 찾아",(0,o.jsx)("br",{}),"효율적인 흐름을 만드는",(0,o.jsx)("br",{}),"프론트엔드 개발자 입니다."]})]})})})},q=(0,l.default)(h.W2).withConfig({displayName:"Presenter__Wrapper",componentId:"sc-ut4lzz-0"})(["padding-top:160px;justify-content:flex-start;align-items:flex-start;p{word-break:break-all;color:",";}"],function(a){return a.theme.color.white}),r=(0,l.default)(n).withConfig({displayName:"Presenter__SpanWithUnderline",componentId:"sc-ut4lzz-1"})(["text-decoration:underline 2px solid ",";position:relative;"],function(a){return a.theme.color.orange}),s=l.default.div.withConfig({displayName:"Presenter__TypoWrapper",componentId:"sc-ut4lzz-2"})(["padding:0 160px;opacity:",";transform:translateY(",");transition:opacity ease-in-out 200ms,transform ease 400ms;@media only screen and ","{padding:0;}"],function(a){return a.isFocused?1:0},function(a){return a.isFocused?0:"-200px"},function(a){return a.theme.maxGrid2}),t=p,u=function(a,b,c,d){var e=(0,k.useState)(!1),f=e[0],g=e[1],h=function(a){g(a)},i=function(){g(!0)},j=function(){g(!1)};return(0,k.useEffect)(function(){var e=function(d,e){d.forEach(function(d){d.isIntersecting?a.current&&(b(),i()):a.current&&(c&&c(),j())})},f=new IntersectionObserver(e,null!=d?d:{root:null,rootMargin:"0px 0px 0px 0px",threshold:.3});return a.current&&f.observe(a.current),function(){a.current&&f.unobserve(a.current)}},[]),{isFocused:f,handleFocus:h}},v=c(4480),w=c(9036),x=c(609),y=c(6371),z=function(a){(0,j.Z)(a);var b=(0,y.Z)().isTablet,c=(0,v.Zl)(w.T),d=(0,k.useRef)(null),e=function(){c(x.h.INTRODUCE)},f=u(d,e,function(){},{threshold:b?.2:.5,rootMargin:"-120px 0px 0px 0px"}),g=f.handleFocus,h=f.isFocused;return(0,k.useEffect)(function(){g(!0)},[]),(0,o.jsx)(t,{divRef:d,isFocused:h})},A=function(a){var b=a.isFocused,c=a.content;return(0,o.jsx)(B,{isFocused:b,children:(0,o.jsx)(m.Z,{fontType:"MG/Heading/L/Bold",color:i.Z.white,children:c})})},B=l.default.div.withConfig({displayName:"SectionTitle__Title",componentId:"sc-1ut9gjp-0"})(["margin-bottom:24px;opacity:",";transform:translateY(",");transition:opacity 200ms ease,transform 200ms ease;p{color:",";}"],function(a){return a.isFocused?1:0},function(a){return a.isFocused?0:"200px"},function(a){return a.theme.color.white}),C=A,D=function(a){var b=a.duration,c=a.content,d=a.isSelected,e=(0,y.Z)(),f=e.isTablet;return(0,o.jsxs)(E,{isSelected:d,children:[(0,o.jsxs)(G,{children:[(0,o.jsx)(F,{}),(0,o.jsx)(m.Z,{fontType:f?"KR/Body/S/Medium":"KR/Body/L/Medium",color:i.Z.white,children:b})]}),(0,o.jsx)(H,{children:(0,o.jsx)(m.Z,{fontType:f?"KR/Body/S/Medium":"KR/Body/L/Medium",color:i.Z.white,children:c})})]})},E=(0,l.default)(h.X2).withConfig({displayName:"CareerItem__Wrapper",componentId:"sc-1b0qqx8-0"})(["align-items:center;justify-content:space-between;p{color:",";}"],function(a){return a.theme.color.white}),F=l.default.div.withConfig({displayName:"CareerItem__VerticalItem",componentId:"sc-1b0qqx8-1"})(["position:relative;border-left:4px solid ",";align-items:center;height:80px;margin-right:20px;overflow:visible;::after{content:'';width:16px;height:16px;background-color:",";border:4px solid ",";border-radius:100%;position:absolute;left:-14px;top:50%;transform:translateY(-50%);}"],function(a){return a.theme.color.white},function(a){return a.theme.color.black},function(a){return a.theme.color.white}),G=(0,l.default)(h.X2).withConfig({displayName:"CareerItem__Duration",componentId:"sc-1b0qqx8-2"})(["margin:0 20px 0 80px;align-items:center;width:unset;@media only screen and ","{margin:0 20px;}"],function(a){return a.theme.maxGrid2}),H=(0,l.default)(h.X2).withConfig({displayName:"CareerItem__Content",componentId:"sc-1b0qqx8-3"})(["width:unset;"]),I=D,J=function(a){var b=a.isFocused,c=a.items,d=a.selectedIndex;return(0,o.jsx)(K,{isFocused:b,children:c.map(function(a,b){return(0,o.jsx)(I,{duration:a.duration,content:a.content,isSelected:b>=d},a.id)})})},K=(0,l.default)(h.JX).withConfig({displayName:"CareerItemsArea__CareerItemWrapper",componentId:"sc-k7vf27-0"})(["padding:0 500px;width:100%;opacity:",";transform:translateY(",");transition:opacity 200ms ease,transform 200ms ease;@media only screen and ","{padding:0 40px;}"],function(a){return a.isFocused?1:0},function(a){return a.isFocused?0:"200px"},function(a){return a.theme.maxGrid2}),L=J,M=function(a){var b=a.divRef,c=a.items,d=a.selectedIndex,e=a.isFocused;return(0,o.jsxs)(N,{ref:b,children:[(0,o.jsx)(C,{isFocused:e,content:"CAREER"}),(0,o.jsx)(L,{items:c,isFocused:e,selectedIndex:d})]})},N=(0,l.default)(h.W2).withConfig({displayName:"Presenter__Wrapper",componentId:"sc-v8j9da-0"})(["justify-content:center;align-items:center;"]),O=M,P=function(a){(0,j.Z)(a);var b=(0,v.Zl)(w.T),c=(0,k.useRef)(null),d=function(){b(x.h.CAREER)},e=u(c,d,function(){},{threshold:.7,root:null,rootMargin:"-20px 0px -20px 0px"}),f=e.isFocused,g=e.handleFocus,h=(0,k.useState)([{id:0,duration:"2021.08 ~ NOW",content:"Bunkerkids Front End Developer"},{id:1,duration:"2021.02 ~ 2021.08",content:"Bunkerkids React Native Intern"},{id:2,duration:"2016.03 ~ 2022.02",content:"숭실대학교 소프트웨어학부"}]),i=h[0];h[1];var l=(0,k.useState)(i.length-1),m=l[0],n=l[1];return(0,k.useEffect)(function(){i.length>0&&n(i.length-1)},[i]),(0,k.useEffect)(function(){g(!0)},[]),(0,o.jsx)(O,{divRef:c,items:i,selectedIndex:m,isFocused:f})},Q=c(9499),R=c(2841),S=function(a){var b=a.close,c=a.children,d=a.show,e=(0,y.Z)(),f=e.isTablet;(0,R.Z)(d);var g=function(a){a.stopPropagation()};return(0,o.jsx)(T,{onClick:b,show:d,children:(0,o.jsxs)(U,{onClick:g,show:d,children:[(0,o.jsx)(V,{children:(0,o.jsx)(h.un,{onClick:b,children:(0,o.jsx)(m.Z,{fontType:f?"KR/Button/S/Medium":"KR/Button/M/Bold",color:i.Z.black,children:"닫기"})})}),c]})})},T=l.default.div.withConfig({displayName:"ModalLayout__Outer",componentId:"sc-wihb41-0"})(["position:fixed;top:0;left:0;height:100vh;width:100vw;background-color:rgba(0,0,0,0.5);padding:100px 200px;opacity:",";transition:opacity 200ms ease-in-out;z-index:",";@media only screen and ","{padding:40px;}"],function(a){return a.show?1:0},function(a){return a.show?2:-1},function(a){return a.theme.maxGrid2}),U=l.default.div.withConfig({displayName:"ModalLayout__Inner",componentId:"sc-wihb41-1"})(["width:100%;height:100%;background-color:",";border-radius:4px;transform:translateY(",");transition:transform 200ms ease;"],i.Z.white,function(a){return a.show?0:"100vh"}),V=(0,l.default)(h.X2).withConfig({displayName:"ModalLayout__Top",componentId:"sc-wihb41-2"})(["width:100%;padding:20px;justify-content:flex-end;"]),W=S,X=c(2640),Y=function(a){var b=a.enumValue,c=a.tabItemWidth,d=a.handleSelectedTab,e=a.isSelected;return(0,o.jsxs)(Z,{tabItemWidth:c,children:[(0,o.jsx)($,{isSelected:e,onClick:function(){return d(b)},children:(0,o.jsx)(m.Z,{fontType:"EN/Button/M/Bold",color:i.Z.black,children:b})}),(0,o.jsx)(_,{isSelected:e})]})},Z=(0,l.default)(h.JX).withConfig({displayName:"TabItem__Wrapper",componentId:"sc-3fhya3-0"})(["width:",";align-items:center;"],function(a){var b=a.tabItemWidth;return b?"".concat(b,"px"):"100%"}),$=(0,l.default)(h.un).withConfig({displayName:"TabItem__TextBtn",componentId:"sc-3fhya3-1"})(["width:100%;padding:12px;p{color:",";}"],function(a){var b=a.isSelected,c=a.theme;return b?c.color.black:c.color.gray}),_=l.default.div.withConfig({displayName:"TabItem__SelectedUnderline",componentId:"sc-3fhya3-2"})(["width:100%;height:2px;background-color:",";transform:scaleX(",");transition:transform 200ms ease;transform-origin:center;"],function(a){var b;return a.isSelected,a.theme.color.black},function(a){return a.isSelected?1:0}),aa=Y,ab=function(a){var b,c=a.tabEnum,d=a.tabItemWidth,e=a.selectedTab,f=a.handleSelectedTab,g=Object.entries(b=c);return(0,o.jsx)(ac,{children:g.map(function(a,b){var c=(0,X.Z)(a,2),g=c[0],h=c[1];return(0,o.jsx)(aa,{enumKey:g,enumValue:h,tabItemWidth:d,isSelected:h===e,handleSelectedTab:f},g)})})},ac=(0,l.default)(h.X2).withConfig({displayName:"Tab__Wrapper",componentId:"sc-1o4c09q-0"})(["width:100%;justify-content:flex-start;align-items:center;"]),ad=ab;(e=d||(d={})).overview="OVERVIEW",e.detail="DETAIL";var ae=function(a){var b=a.showModal,c=a.closeModal,e=a.modalData,f=a.handleSelectedTab,g=a.selectedTab;return(0,o.jsx)(W,{show:b,close:c,children:(0,o.jsxs)(af,{children:[(0,o.jsx)(m.Z,{fontType:"EN/Heading/L/Bold",color:i.Z.black,children:null==e?void 0:e.title.kr}),(0,o.jsx)(ad,{tabEnum:d,tabItemWidth:100,handleSelectedTab:f,selectedTab:g})]})})},af=(0,l.default)(h.JX).withConfig({displayName:"Presenter__Wrapper",componentId:"sc-1523rfe-0"})(["width:100%;height:100%;padding:0 48px;@media only screen and ","{padding:0 20px;}"],function(a){return a.theme.maxGrid2}),ag=ae,ah=function(a){var b=(0,k.useState)(a),c=b[0],d=b[1],e=function(a){d(a)};return{selectedTab:c,handleSelectedTab:e}};function ai(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function aj(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?ai(Object(c),!0).forEach(function(b){(0,Q.Z)(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):ai(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var ak,al=function(a){(0,j.Z)(a);var b=ah(d.overview),c=b.selectedTab,e=b.handleSelectedTab;return(0,o.jsx)(ag,aj(aj({},a),{},{selectedTab:c,handleSelectedTab:e}))},am=function(a){var b=a.title,c=a.subTitle,d=a.onClick;return(0,o.jsxs)(an,{onClick:d,children:[(0,o.jsx)(m.Z,{fontType:"EN/Body/L/Medium",color:i.Z.white,children:b.en}),(0,o.jsx)(m.Z,{fontType:"EN/Body/M/Regular",color:i.Z.white,children:b.kr}),(0,o.jsx)(ao,{children:(0,o.jsx)(m.Z,{fontType:"KR/Body/M/Regular",color:i.Z.white,children:c})})]})},an=(0,l.default)(h.JX).withConfig({displayName:"Presenter__Wrapper",componentId:"sc-1cidc9d-0"})(["padding:12px;align-items:flex-start;width:200px;transition:all ease 500ms;:hover{> p{transition:all ease 500ms;color:",";}}p{color:",";}"],function(a){return a.theme.color.orange},function(a){return a.theme.color.white}),ao=l.default.div.withConfig({displayName:"Presenter__SubTitleWrapper",componentId:"sc-1cidc9d-1"})(["margin-top:12px;p{opacity:0.8;}"]),ap=am;function aq(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}var ar,as=function(a){var b=a.onClickItem,c=a.data,d=function(){b(c)};return(0,o.jsx)(ap,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?aq(Object(c),!0).forEach(function(b){(0,Q.Z)(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):aq(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}({onClick:d},c))},at=function(a){var b=a.data,c=a.isFocused,d=a.openModal;return(0,o.jsx)(au,{isFocused:c,children:b.map(function(a){return(0,o.jsx)(as,{onClickItem:d,data:a},a.id)})})},au=l.default.div.withConfig({displayName:"Presenter__Wrapper",componentId:"sc-9vkjy9-0"})(["margin-top:20px;display:grid;grid-template-columns:repeat(4,1fr);gap:4rem;opacity:",";transform:translateY(",");transition:opacity 200ms ease,transform 200ms ease;@media only screen and ","{padding:0 40px;}"],function(a){return a.isFocused?1:0},function(a){return a.isFocused?0:"200px"},function(a){return a.theme.maxGrid2}),av=at;function aw(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}var ax,ay=function(a){return(0,j.Z)(a),(0,o.jsx)(av,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?aw(Object(c),!0).forEach(function(b){(0,Q.Z)(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):aw(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}({data:[{id:0,title:{kr:"마이쉽단 모바일 앱",en:"MyShipdan Mobile App"},subTitle:"AI 기반 개인 맞춤 식단 구성 및 커머스 서비스 웹뷰 앱 프로젝트",detail:{id:0,content:"content입니다"},duration:"2022.06 ~ NOW",iconImage:"",link:"",tech:[{id:0,name:"React-Native"}]},{id:1,title:{kr:"마이쉽단 웹 프로덕트",en:"MyShipdan Web Product"},subTitle:"AI 기반 개인 맞춤 식단 구성 및 커머스 서비스 웹 프로젝트",detail:{id:0,content:"content입니다"},duration:"2022.06 ~ NOW",iconImage:"",link:"",tech:[{id:0,name:"React-Native"}]},{id:2,title:{kr:"마이쉽단 어드민",en:"MyShipdan Admin"},subTitle:"입점 업체 물류 발주/입고/정산을 위한 어드민 프로젝트",detail:{id:0,content:"content입니다"},duration:"2022.06 ~ NOW",iconImage:"",link:"",tech:[{id:0,name:"React-Native"}]},{id:3,title:{kr:"피트니스 다이빙 모바일 앱",en:"FitnessDiving Mobile App"},subTitle:"실시간 양방향 카메라를 통한 라이브 동영상 스트리밍 서비스 앱 프로젝트",detail:{id:0,content:"content입니다"},duration:"2022.06 ~ NOW",iconImage:"",link:"",tech:[{id:0,name:"React-Native"}]},{id:4,title:{kr:"시각장애인을 위한 지하철 도우미",en:"Subway Guide for Visually Impaired"},subTitle:"시각장애인을 위해 음성 인식/안내를 통해 지하철을 안내해주는 프로젝트",detail:{id:0,content:"content입니다"},duration:"2022.06 ~ NOW",iconImage:"",link:"",tech:[{id:0,name:"React-Native"}]},{id:5,title:{kr:"벙커키즈 제비뽑기 토이 프로젝트",en:"Bunkerkids Draw TOY Project"},subTitle:"Svelte를 이용한 간단한 제비뽑기 토이 프로젝트",detail:{id:0,content:"content입니다"},duration:"2022.06 ~ NOW",iconImage:"",link:"",tech:[{id:0,name:"React-Native"}]},{id:6,title:{kr:"Just Lift 운동 세트 카운터 웹",en:"Just Lift Work Out Set Counter Web"},subTitle:"운동 세트 수 카운팅과 설정한 쉬는 시간을 위한 타이머 기능의 프로젝트",detail:{id:0,content:"content입니다"},duration:"2022.06 ~ NOW",iconImage:"",link:"",tech:[{id:0,name:"React-Native"}]}]},a))};function az(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}var aA=function(a){var b=a.divRef,c=a.openModal,d=a.isFocused;return(0,o.jsxs)(k.Fragment,{children:[(0,o.jsxs)(aB,{ref:b,children:[(0,o.jsx)(C,{isFocused:d,content:"PROJECTS"}),(0,o.jsx)(ay,{isFocused:d,openModal:c})]}),(0,o.jsx)(al,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?az(Object(c),!0).forEach(function(b){(0,Q.Z)(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):az(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}({},a))]})},aB=(0,l.default)(h.W2).withConfig({displayName:"Presenter__Wrapper",componentId:"sc-umlasf-0"})(["justify-content:center;align-items:center;"]),aC=aA,aD=function(a){var b=(0,k.useState)(null!=a&&a),c=b[0],d=b[1],e=(0,k.useState)(null),f=e[0],g=e[1],h=function(a){d(!0),a&&g(a)},i=function(){d(!1),g(null)};return{show:c,open:h,close:i,modalData:f}},aE=function(a){(0,j.Z)(a);var b=(0,v.Zl)(w.T),c=(0,k.useRef)(null),d=function(){b(x.h.PROJECTS)},e=u(c,d,function(){},{threshold:.5,root:null,rootMargin:"-20px 0px -20px 0px"}).isFocused,f=aD(),g=f.show,h=f.open,i=f.close,l=f.modalData;return(0,o.jsx)(aC,{divRef:c,showModal:g,openModal:h,closeModal:i,isFocused:e,modalData:l})},aF=function(){return(0,o.jsxs)(aG,{bgColor:i.Z.black,children:[(0,o.jsx)(z,{}),(0,o.jsx)(P,{}),(0,o.jsx)(aE,{})]})},aG=(0,l.default)(h.JX).withConfig({displayName:"pages__Wrapper",componentId:"sc-6bh3z2-0"})(["padding:140px 24px;z-index:0;background-color:",";> div{margin-bottom:120px;:last-child{margin-bottom:0;}}@media only screen and ","{padding:60px 24px;> div{margin-bottom:24px;:last-child{margin-bottom:0;}}}"],function(a){return a.theme.color.black},function(a){return a.theme.maxGrid2}),aH=aF},8312:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(6634)}])}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=8312)}),_N_E=a.O()}])