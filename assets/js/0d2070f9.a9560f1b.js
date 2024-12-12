"use strict";(self.webpackChunkEat_The_Pie_docs=self.webpackChunkEat_The_Pie_docs||[]).push([[71],{9452:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var n=t(4848),i=t(8453);const s={},c="VDF",l={id:"smart-contracts/vdf-contract",title:"VDF",description:"Github Link//github.com/eatthepie/contracts/blob/main/src/VDFPietrzak.sol",source:"@site/docs/smart-contracts/vdf-contract.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/vdf-contract",permalink:"/smart-contracts/vdf-contract",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lottery",permalink:"/smart-contracts/lottery-contract"},next:{title:"VDF Pietrzak Library",permalink:"/smart-contracts/pietrzak-library"}},a={},o=[{value:"Contract Structure",id:"contract-structure",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Constants",id:"constants",level:3},{value:"Core Functionality",id:"core-functionality",level:2},{value:"VDF Verification",id:"vdf-verification",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Process",id:"process",level:4},{value:"Technical Details",id:"technical-details",level:2},{value:"VDF Properties",id:"vdf-properties",level:3}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"vdf",children:"VDF"})}),"\n",(0,n.jsxs)(r.p,{children:["Github Link: ",(0,n.jsx)(r.a,{href:"https://github.com/eatthepie/contracts/blob/main/src/VDFPietrzak.sol",children:"https://github.com/eatthepie/contracts/blob/main/src/VDFPietrzak.sol"})]}),"\n",(0,n.jsxs)(r.p,{children:["The VDF contract implements the ",(0,n.jsx)(r.a,{href:"smart-contracts/pietzrak-library.md",children:"VDF Pietzrak Library"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"contract-structure",children:"Contract Structure"}),"\n",(0,n.jsx)(r.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"PietrzakLibrary"}),": Library implementing the core VDF calculations"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"BigNumbers"}),": Library for handling large number operations"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"constants",children:"Constants"}),"\n",(0,n.jsx)(r.p,{children:"Below are the parameters used for our implementation in the lottery:"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Value"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"N"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"c7970ce...cc7e5"})}),(0,n.jsxs)(r.td,{children:["The RSA-2048 challenge number used as the modulus. This massive 2048-bit number has no known prime factors, making it ideal for cryptographic security. (",(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/RSA_Factoring_Challenge",children:"Learn more about RSA-2048"}),")"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"nBitLength"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"2048"})}),(0,n.jsx)(r.td,{children:"The bit length of our RSA modulus"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"delta"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"10"})}),(0,n.jsx)(r.td,{children:"Number of iterations to skip during verification, optimizing the trade-off between prover and verifier computation time"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"T"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"67108864"})," (2\xb2\u2076)"]}),(0,n.jsx)(r.td,{children:"Total number of sequential iterations required for the VDF computation. This parameter is set to create a ~5 hour delay on modern hardware"})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"core-functionality",children:"Core Functionality"}),"\n",(0,n.jsx)(r.h3,{id:"vdf-verification",children:"VDF Verification"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-solidity",children:"function verifyPietrzak(\n    BigNumber[] memory v,\n    BigNumber memory x,\n    BigNumber memory y\n) external view returns (bool)\n"})}),"\n",(0,n.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"v"}),": Array of intermediate values in the VDF computation"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"x"}),": Initial input to the VDF (RANDAO value)"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"y"}),": Purported output of the VDF"]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"bool"}),": True if the proof is valid, false otherwise"]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"process",children:"Process"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"Creates BigNumber representation of RSA modulus"}),"\n",(0,n.jsx)(r.li,{children:"Delegates verification to PietrzakLibrary"}),"\n",(0,n.jsx)(r.li,{children:"Performs efficient proof verification"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"technical-details",children:"Technical Details"}),"\n",(0,n.jsx)(r.h3,{id:"vdf-properties",children:"VDF Properties"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Fast Verification"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Uses skip parameter (delta) for efficient verification"}),"\n",(0,n.jsx)(r.li,{children:"Verification time logarithmic in total iterations"}),"\n",(0,n.jsx)(r.li,{children:"Much faster than computation time"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Security Guarantees"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Based on time-lock puzzles"}),"\n",(0,n.jsx)(r.li,{children:"Uses trusted RSA modulus"}),"\n",(0,n.jsx)(r.li,{children:"Provably secure under standard assumptions"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>l});var n=t(6540);const i={},s=n.createContext(i);function c(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);