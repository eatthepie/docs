"use strict";(self.webpackChunkEat_The_Pie_docs=self.webpackChunkEat_The_Pie_docs||[]).push([[997],{6590:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=s(4848),t=s(8453);const r={},a="Draw & Verification Commands",o={id:"command-line-app/draw",title:"Draw & Verification Commands",description:"These docs are for V1 of Eat The Pie, which is now deprecated. For the latest documentation for V2 on World Chain, please visit docs.eatthepie.xyz.",source:"@site/docs/command-line-app/draw.md",sourceDirName:"command-line-app",slug:"/command-line-app/draw",permalink:"/command-line-app/draw",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Prize & NFT Commands",permalink:"/command-line-app/prize"},next:{title:"Game Settings",permalink:"/command-line-app/settings"}},c={},l=[{value:"Tips \ud83d\udca1",id:"tips-",level:4},{value:"Tips \ud83d\udca1",id:"tips--1",level:4},{value:"Tips \ud83d\udca1",id:"tips--2",level:4},{value:"Tips \ud83d\udca1",id:"tips--3",level:4},{value:"Tips \ud83d\udca1",id:"tips--4",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"draw--verification-commands",children:"Draw & Verification Commands"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["These docs are for V1 of Eat The Pie, which is now deprecated. For the latest documentation for V2 on World Chain, please visit ",(0,i.jsx)(n.a,{href:"https://docs.eatthepie.xyz",children:"docs.eatthepie.xyz"}),"."]})}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsxs)("summary",{children:[(0,i.jsx)("h3",{children:"\ud83c\udfb2 Initiate Draw"}),"Start the drawing process for the current game round."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ eatthepie initiate-draw\n"})}),(0,i.jsx)(n.p,{children:"When you execute the command and all conditions are met:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"Transaction Hash: 0x123...abc\nDraw initiated successfully!\n"})}),(0,i.jsx)(n.h4,{id:"tips-",children:"Tips \ud83d\udca1"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Make sure both conditions are met before initiating:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Minimum time interval has passed (check with ",(0,i.jsx)(n.code,{children:"status"})," command)"]}),"\n",(0,i.jsxs)(n.li,{children:["Prize pool threshold has been reached (check with ",(0,i.jsx)(n.code,{children:"status"})," command)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"The draw can only be initiated once per game"}),"\n"]})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsxs)("summary",{children:[(0,i.jsx)("h3",{children:"\ud83c\udfb2 Set RANDAO Value"}),"Set the RANDAO value to complete the drawing process."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ eatthepie set-randao\n"})}),(0,i.jsx)(n.p,{children:"When you execute the command, you'll first be prompted for the game:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"Enter the game number to set the RANDAO value for: 2\n"})}),(0,i.jsx)(n.p,{children:"If all conditions are met:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"Transaction Hash: 0x123...abc\nRANDAO value set successfully!\n"})}),(0,i.jsx)(n.h4,{id:"tips--1",children:"Tips \ud83d\udca1"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"RANDAO values can only be set after the buffer period (128 blocks) has passed"}),"\n",(0,i.jsxs)(n.li,{children:["Make sure draw has been initiated first using the ",(0,i.jsx)(n.code,{children:"initiate-draw"})," command"]}),"\n"]})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsxs)("summary",{children:[(0,i.jsx)("h3",{children:"\ud83d\udcdd Submit VDF Proof"}),"Submit VDF proof to reveal lottery numbers."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ eatthepie submit-vdf-proof\n"})}),(0,i.jsx)(n.p,{children:"When you execute the command, you'll be prompted for two inputs:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"Enter the game number to submit the VDF proof for: 2\nEnter the path to the proof file (proof.json): ~/proof.json\n\nSubmitting VDF proof...\nTransaction Hash: 0x123...abc\nVDF proof submitted successfully!\n"})}),(0,i.jsx)(n.h4,{id:"tips--2",children:"Tips \ud83d\udca1"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Make sure the RANDAO value has been set before submitting the VDF proof"}),"\n",(0,i.jsxs)(n.li,{children:["The proof file (proof.json) must be generated using the ",(0,i.jsx)(n.a,{href:"https://github.com/eatthepie/vdfs",children:"VDF prover tool"})]}),"\n"]})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsxs)("summary",{children:[(0,i.jsx)("h3",{children:"\u2705 Verify VDF"}),"Verify a VDF proof for a past game."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ eatthepie verify-vdf\n"})}),(0,i.jsx)(n.p,{children:"When you execute the command, you'll be prompted for inputs:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"Enter the game number to verify the VDF proof for: 1\nEnter the path to the proof.json file: ~/proof.json\n\nVerifying VDF proof...\nGame 1 VDF verified successfully!\nWinning Numbers: 7, 23, 25, 12\n"})}),(0,i.jsx)(n.h4,{id:"tips--3",children:"Tips \ud83d\udca1"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This command is used to verify proofs of past games"}),"\n",(0,i.jsxs)(n.li,{children:["To submit a proofs for the current game, use the ",(0,i.jsx)(n.code,{children:"submit-vdf-proof"})," command instead"]}),"\n"]})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsxs)("summary",{children:[(0,i.jsx)("h3",{children:"\ud83d\udcb0 Calculate Payouts"}),"Calculate prize distribution for a completed game round."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ eatthepie calculate-payouts\n"})}),(0,i.jsx)(n.p,{children:"When you execute the command, you'll first be prompted for the game:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"Enter the game number to calculate payouts for: 2\n\nCalculating payouts...\nTransaction Hash: 0x123...abc\nPayouts calculation submitted!\n\nWaiting for transaction to be confirmed...\nBlock Number: 1234567\nTransaction confirmed successfully!\n\nFetching payout information...\nGame 2 Payouts:\nPrize Pool: 15.5 ETH\nJackpot Winners: 1 (10.0 ETH each)\n3-in-a-row Winners: 2 (2.5 ETH each)\n2-in-a-row Winners: 2 (1.0 ETH each)\n"})}),(0,i.jsx)(n.h4,{id:"tips--4",children:"Tips \ud83d\udca1"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Make sure the game's VDF proof has been submitted and validated first"}),"\n",(0,i.jsx)(n.li,{children:"Once calculated, players can claim prizes"}),"\n"]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var i=s(6540);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);