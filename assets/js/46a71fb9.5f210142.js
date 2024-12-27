"use strict";(self.webpackChunkEat_The_Pie_docs=self.webpackChunkEat_The_Pie_docs||[]).push([[611],{5695:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var t=r(4848),s=r(8453);const a={},o="Core Game Commands",i={id:"command-line-app/core",title:"Core Game Commands",description:"\ud83c\udf9f\ufe0f Buy TicketsPurchase your lottery tickets with custom or auto-generated numbers.",source:"@site/docs/command-line-app/core.md",sourceDirName:"command-line-app",slug:"/command-line-app/core",permalink:"/command-line-app/core",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setup & Configuration",permalink:"/command-line-app/setup"},next:{title:"Prize & NFT Commands",permalink:"/command-line-app/prize"}},c={},l=[{value:"Tips \ud83d\udca1",id:"tips-",level:4}];function d(e){const n={code:"code",h1:"h1",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"core-game-commands",children:"Core Game Commands"})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsxs)("summary",{children:[(0,t.jsx)("h3",{children:"\ud83c\udf9f\ufe0f Buy Tickets"}),"Purchase your lottery tickets with custom or auto-generated numbers."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ eatthepie buy\n"})}),(0,t.jsx)(n.p,{children:"When you execute the command, you'll be guided through the buy process:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"Current ticket price: 0.1 WLD\nCurrent difficulty: Easy (1-25)\nValid number range: 1-25, Etherball: 1-10\n\nHow many tickets do you want to buy? (1-100): 2\n\nDo you want to provide your own numbers or auto-generate?\n\u276f Provide own\n  Auto-generate\n\nEnter 4 numbers for ticket 1 (comma-separated, last is Etherball): 7,23,5,9\nEnter 4 numbers for ticket 2 (comma-separated, last is Etherball): 3,15,20,8\n"})}),(0,t.jsx)(n.p,{children:"Review your tickets before purchase:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"Tickets to purchase:\nTicket 1: 7, 23, 5, 9\nTicket 2: 3, 15, 20, 8\nTotal cost: 0.2 WLD\n\nDo you want to proceed with the purchase? (Y/n)\n"})}),(0,t.jsx)(n.p,{children:"Transaction Done \ud83d\udcdd"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"Transaction Hash: 0x123...abc\nPurchase submitted!\n\nWaiting for transaction to be confirmed...\nBlock Number: 1234567\nTransaction confirmed successfully!\n"})}),(0,t.jsx)(n.h4,{id:"tips-",children:"Tips \ud83d\udca1"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Make sure the numbers you pick are within the valid ranges"}),"\n",(0,t.jsx)(n.li,{children:"Make sure your wallet has enough WLD to cover the purchase amount and gas fees"}),"\n"]})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsxs)("summary",{children:[(0,t.jsx)("h3",{children:"\ud83d\udcca Status"}),"Check the current game status including prize pool, difficulty, and draw time."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ eatthepie status\n"})}),(0,t.jsx)(n.p,{children:"When you execute the command, you'll see the status of the currentt ongoing round:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"Status:\nCurrent Game Round: 2\nDifficulty: Easy (1-25)\nPrize Pool: 10.5 WLD\nNext Possible Draw Time: 10/29/2024, 3:00:00 PM\nTime Until Draw: 2 hours, 15 minutes\n"})})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsxs)("summary",{children:[(0,t.jsx)("h3",{children:"\u2139\ufe0f Game Info"}),"View detailed information about any past or current game."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ eatthepie game-info\n"})}),(0,t.jsx)(n.p,{children:"When you execute the command, you'll be asked to enter a game number:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Enter the past game number you want to view: 2\n"})}),(0,t.jsx)(n.p,{children:"The output will show all game information:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"Game 2 Information:\nStatus: Completed\nPrize Pool: 15.5 WLD\nDifficulty: Easy (1-25)\nDraw Initiated Block: 1234567\n\nWinning Numbers: 7, 23, 45, 12\nNumber of Winners: 5 (Jackpot: 1, 3 in-a-row: 2, 2 in-a-row: 2)\nPayouts: Jackpot: 10.0 WLD, 3 in-a-row: 2.5 WLD, 2 in-a-row: 1.0 WLD\n"})})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsxs)("summary",{children:[(0,t.jsx)("h3",{children:"\ud83c\udfc6 Did I Win"}),"Check if you (or any other wallet) won."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ eatthepie did-i-win\n"})}),(0,t.jsx)(n.p,{children:"When you execute the command, you'll be prompted for:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"Enter the game number you want to check: 2\nEnter wallet address: 0x742d35Cc6634C0532925a3b844Bc454e4438f44e\n"})}),(0,t.jsx)(n.p,{children:"If you won, you'll see:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"Congratulations, you won!\nJackpot: Yes\n3 in-a-row: No\n2 in-a-row: No\nTotal Prize: 10.5 WLD\nClaimed: No\n\nDon't forget to claim your prize!\n"})}),(0,t.jsx)(n.p,{children:"If you didn't win:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"Sorry, you didn't win in this game. Better luck next time!\n"})})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsxs)("summary",{children:[(0,t.jsx)("h3",{children:"\ud83c\udf9f\ufe0f Ticket History"}),"View all tickets purchased for a specific game."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ eatthepie ticket-history\n"})}),(0,t.jsx)(n.p,{children:"When you execute the command, you'll be prompted for:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"Enter the game number: 2\nEnter wallet address: 0x742d35Cc6634C0532925a3b844Bc454e4438f44e\n"})}),(0,t.jsx)(n.p,{children:"If you have tickets, you'll see:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"Tickets:\nTicket 1: 7, 23, 45, 12\nTicket 2: 3, 15, 42, 8\nTicket 3: 11, 27, 39, 15\n\nTotal Tickets: 3\n"})}),(0,t.jsx)(n.p,{children:"If you have no tickets:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"No tickets found.\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var t=r(6540);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);