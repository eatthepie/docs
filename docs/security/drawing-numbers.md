# Drawing Numbers

:::warning
These docs are for V1 of Eat The Pie, which is now deprecated. For the latest documentation for V2 on World Chain, please visit [docs.eatthepie.xyz](https://docs.eatthepie.xyz).
:::

## 🎯 Introduction

At the heart of every lottery is its random number generation - the crucial mechanism that determines winners. While traditional lotteries rely on central authorities, Eat the Pie harnesses Ethereum's decentralized network of validators and Verifiable Delay Functions (VDFs) to ensure true randomness. This creates a provably fair system where no single entity can influence the outcome.

## 🌐 Why Ethereum?

Ethereum stands out as the ideal platform for this lottery system due to its nature as a truly decentralized blockchain. In this ecosystem:

- 🔒 No single entity can control or manipulate the system.
- 👁️ Transactions and smart contract executions are transparent and verifiable.
- 🏗️ The network's inherent properties provide a foundation for building provably fair systems.

## 🛡️ Enhancing Security with VDFs

Running a transparent lottery on a blockchain faces one critical challenge: achieving 100% random outcomes that no party can predict. This raises two key questions: How can validators be prevented from gaining any advantage? And how can the settling block's validator's integrity be ensured?

Eat the Pie solves this through Verifiable Delay Functions (VDFs), creating a calculated time barrier between game completion and number generation. This engineered delay effectively neutralizes any potential validator influence. While this means waiting slightly longer for results, it guarantees absolute fairness and trustworthiness in every draw.

# 🔢 The Drawing Process

Let's break down the intricate process of how random winning numbers are generated:

<br />
<img src="/img/security.svg" alt="Eat The Pie Process" width="700" />
<br />
<br />

<details>
<summary><h2>1. 🚀 Initiating the Draw</h2> - command <code>initiate-draw</code> using the <a href="https://github.com/eatthepie/cli">CLI app</a></summary>

- At a predetermined block (let's call it block X), this function is called to start the drawing process.
- The system waits 128 blocks (~4 epochs, 30 minutes) before using the [RANDAO value](https://eth2book.info/bellatrix/part2/building_blocks/randomness/) from `block.prevrandao`.
- Purpose of Delay: To minimize the predictability and biasability of `block.prevrandao`.
- Ref: [smart contract](https://github.com/eatthepie/contracts/blob/main/src/Lottery.sol#L275).
</details>

<details>
<summary><h2>2. 🎲 Setting the Random Value</h2> - command <code>set-randao</code> using the <a href="https://github.com/eatthepie/cli">CLI app</a></summary>

- Once the delay has passed, function: `setRandom()` can get called.
- The `block.prevrandao` value at which this gets called will serve as the input of the VDF function.
- At this point, the game is settled, but nobody knows the numbers until the VDF is solved.
- Ref: [smart contract](https://github.com/eatthepie/contracts/blob/main/src/Lottery.sol#323).
</details>

<details>
<summary><h2>3. ⏳ VDF Computation</h2> - compute with <a href="https://github.com/eatthepie/vdfs">the VDF prover</a></summary>

- The VDF gets computed offchain (by anyone) using the RANDAO from above as the input.
- The parameters of the VDF have been intentionally set to make this computation time-intensive. This will take a few hours to complete (see below for more info).
</details>

<details>
<summary><h2>4. ✅ Submitting and Verifying the VDF Proof</h2> - command <code>submit-vdf-proof</code> using the <a href="https://github.com/eatthepie/cli">CLI app</a></summary>

- A proof gets submitted onchain via the function: `submitVDFProof()`
- Only if the proof is valid do the numbers then get revealed and committed.
- Ref: [smart contract](https://github.com/eatthepie/contracts/blob/main/src/Lottery.sol#L337).
</details>

<details>
<summary><h2>5. 🏁 Finalizing the Draw</h2> - command <code>calculate-payouts</code> using the <a href="https://github.com/eatthepie/cli">CLI app</a></summary>

- The function `calculatePayouts()` can now get called, which settles the prizes and winners.
- The round is over and users can claim their prizes.
- Ref: [smart contract](https://github.com/eatthepie/contracts/blob/main/src/Lottery.sol#L451).
</details>

## 🧠 Key Concepts Explained

### 🔢 RANDAO and block.prevrandao

<b>`block.prevrandao`</b> serves as Ethereum's built-in randomness source, powered by the beacon chain's RANDAO mechanism:

- Generated from thousands of validator contributions
- Changes every block (~12 seconds)
- Manipulation-resistant by design
- Unpredictable beyond one epoch
- Provides verifiable randomness at the protocol level

Want to learn more? Check out these resources:

- [Deep dive into RANDAO](https://eth2book.info/bellatrix/part2/building_blocks/randomness/)
- [EIP 4399: Supplant DIFFICULTY opcode with PREVRANDAO](https://eips.ethereum.org/EIPS/eip-4399)
- [Video explanation of RANDAO](https://www.youtube.com/watch?v=rUOBPu4W28c)

### ⏱️ VDF (Verifiable Delay Function)

The lottery implements the [Pietrzak VDF](https://eprint.iacr.org/2018/627.pdf), a cryptographic function that enforces a time delay between input and output. Think of it as a cryptographic time-lock that ensures fairness through forced computation time.

#### Key Properties

1. **Sequential Computation**

   - Operations must be performed in order
   - Cannot be parallelized or shortened
   - Hardware improvements don't significantly impact minimum time

2. **Efficient Verification**

   - Verification takes milliseconds
   - On-chain verification possible
   - Compact proofs (~1kb)
   - Low gas costs for submission

3. **Deterministic Security**
   - Consistent input/output mapping
   - Future-proof design principles
   - No hidden randomness in computation

<details>
<summary><h3>VDF Parameters used for Eat The Pie</h3></summary>

```
N (RSA modulus) = RSA-2048 Challenge Number
T (iterations)   = 2^26 (67,108,864)
Expected Time    = ~5 hours on high-end CPU
```

Our VDF implementation uses these parameters:

1. **RSA-2048 Challenge Number** as the modulus (N)
   - A 2048-bit number from the RSA Factoring Challenge
   - No one knows its prime factors (p × q)
   - Ensures the computation can't be shortcut
2. **67,108,864 iterations** (T = 2^26)
   - Takes ~5 hours on modern hardware
   - Future-proof: Even with better hardware/software: - GPU acceleration provides minimal benefit - Parallel computing doesn't help - Computation remains inherently sequential

</details>

Want to learn more? Check out these resources:

- [VDF Research Blog](https://vdfresearch.org/)
- [Video explanation of VDFs](https://www.youtube.com/watch?v=qf1CN5n8aHM)

## 🤔 Why This Approach Matters

### 1. 🛡️ Validator Neutralization

The combination of RANDAO and VDF ensures that validators cannot predict or influence the outcome, maintaining true randomness in the drawing process.

### 2. 🔒 Front-Running Prevention

The mandatory computation delay creates a temporal barrier that prevents any form of front-running or last-minute exploitation.

### 3. 🔍 Complete Verifiability

Every step in the process can be independently verified on-chain, ensuring transparency without compromising security.

### 4. 💪 Future-Proof Design

The time-locked nature of VDF computation maintains security even as computational power advances, protecting against future technological improvements.
