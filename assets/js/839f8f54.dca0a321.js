"use strict";(self.webpackChunkEat_The_Pie_docs=self.webpackChunkEat_The_Pie_docs||[]).push([[76],{8301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(4848),i=n(8453);const s={},c="Drawing Numbers",a={id:"security/drawing-numbers",title:"Drawing Numbers",description:"\ud83c\udfaf Introduction",source:"@site/docs/security/drawing-numbers.md",sourceDirName:"security",slug:"/security/drawing-numbers",permalink:"/security/drawing-numbers",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Game Settings",permalink:"/command-line-app/settings"},next:{title:"Witnet Oracles",permalink:"/security/witnet-oracles"}},o={},l=[{value:"\ud83c\udfaf Introduction",id:"-introduction",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"drawing-numbers",children:"Drawing Numbers"})}),"\n",(0,r.jsx)(t.h2,{id:"-introduction",children:"\ud83c\udfaf Introduction"}),"\n",(0,r.jsx)(t.p,{children:"At the heart of every lottery is its random number generation - the crucial mechanism that determines winners. While traditional lotteries rely on central authorities, Eat the Pie uses Witnet's oracles on World Chain to ensure true randomness. This creates a provably fair system where no single entity can influence the outcome."}),"\n",(0,r.jsx)(t.h1,{id:"-the-drawing-process",children:"\ud83d\udd22 The Drawing Process"}),"\n",(0,r.jsx)(t.p,{children:"Let's break down the intricate process of how random winning numbers are generated:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("img",{src:"/img/security.svg",alt:"Eat The Pie Process",width:"700"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsxs)("summary",{children:[(0,r.jsx)("h2",{children:"1. \ud83d\ude80 Initiating the Draw"})," - command ",(0,r.jsx)("code",{children:"initiate-draw"})," using the ",(0,r.jsx)("a",{href:"https://github.com/eatthepie/cli",children:"CLI app"})]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"At a predetermined block (let's call it block X), this function is called to start the drawing process."}),"\n",(0,r.jsx)(t.li,{children:"The function will call the witness contract to ask to generate random bytes."}),"\n",(0,r.jsxs)(t.li,{children:["Ref: ",(0,r.jsx)(t.a,{href:"https://github.com/eatthepie/contracts-layer2/blob/main/src/Lottery.sol#L328-L347",children:"smart contract"}),"."]}),"\n"]})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsxs)("summary",{children:[(0,r.jsx)("h2",{children:"2. \ud83c\udfb2 Completing the Draw"})," - command ",(0,r.jsx)("code",{children:"complete-draw"})," using the ",(0,r.jsx)("a",{href:"https://github.com/eatthepie/cli",children:"CLI app"})]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Once the witnet contract has generated the random numbers, function: ",(0,r.jsx)(t.code,{children:"setRandomAndWinningNumbers()"})," can get called."]}),"\n",(0,r.jsx)(t.li,{children:"This will fetch the randomness from the witnet contract and set the winning numbers."}),"\n",(0,r.jsxs)(t.li,{children:["Ref: ",(0,r.jsx)(t.a,{href:"https://github.com/eatthepie/contracts-layer2/blob/main/src/Lottery.sol#L375-L384",children:"smart contract"}),"."]}),"\n"]})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsxs)("summary",{children:[(0,r.jsx)("h2",{children:"3. \ud83c\udfc1 Finalizing the Draw"})," - command ",(0,r.jsx)("code",{children:"calculate-payouts"})," using the ",(0,r.jsx)("a",{href:"https://github.com/eatthepie/cli",children:"CLI app"})]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The function ",(0,r.jsx)(t.code,{children:"calculatePayouts()"})," can now get called, which settles the prizes and winners."]}),"\n",(0,r.jsx)(t.li,{children:"The round is over and users can claim their prizes."}),"\n",(0,r.jsxs)(t.li,{children:["Ref: ",(0,r.jsx)(t.a,{href:"https://github.com/eatthepie/contracts-layer2/blob/main/src/Lottery.sol#L432-L455",children:"smart contract"}),"."]}),"\n"]})]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var r=n(6540);const i={},s=r.createContext(i);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);