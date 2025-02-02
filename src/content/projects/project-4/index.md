---
title: "Marketplace for Services on Solana"
description: "Service Marketplace on Solana."
date: "Jul 13 2024"
demoURL: ""
repoURL: "https://github.com/Harshcreator/Two-sided-Marketplace-for-Services"
---

# Service Marketplace on Solana

This project implements a 2-sided marketplace for services on the Solana blockchain using the Anchor framework. Vendors can list their services as NFTs, and consumers can purchase these service NFTs. The marketplace supports both soulbound and non-soulbound NFTs and collects royalties on resales.

## Features

- Vendors can list services as NFTs with metadata.
- Consumers can purchase service NFTs.
- Supports both soulbound and non-soulbound NFTs.
- Collects royalties on NFT resales.

## Prerequisites

Before starting, ensure you have the following installed:

- [Rust](https://www.rust-lang.org/tools/install)
- [Solana CLI](https://docs.solana.com/cli/install-solana-cli-tools)
- [Anchor CLI](https://book.anchor-lang.com/getting_started/installation.html)
- Node.js and npm (for client scripts)

## Installation

Clone the repository and navigate to the project directory:

``` sh
git clone https://github.com/your-username/service-marketplace
cd service-marketplace
anchor build
anchor deploy // solana-test-validator
npm install @project-serum/anchor

```
```sh
const anchor = require('@project-serum/anchor');
const { SystemProgram } = anchor.web3;

async function listService(provider, serviceDetails) {
  const program = anchor.workspace.ServiceMarketplace;
  const serviceAccount = anchor.web3.Keypair.generate();

  await program.rpc.listService(
    serviceDetails.serviceName,
    serviceDetails.description,
    new anchor.BN(serviceDetails.price),
    serviceDetails.isSoulbound,
    {
      accounts: {
        serviceAccount: serviceAccount.publicKey,
        vendor: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      },
      signers: [serviceAccount],
    }
  );
}

async function purchaseService(provider, servicePublicKey, vendorPublicKey, consumerTokenAccount, vendorTokenAccount) {
  const program = anchor.workspace.ServiceMarketplace;

  await program.rpc.purchaseService({
    accounts: {
      serviceAccount: servicePublicKey,
      vendor: vendorPublicKey,
      consumer: provider.wallet.publicKey,
      consumerTokenAccount: consumerTokenAccount,
      vendorTokenAccount: vendorTokenAccount,
      tokenProgram: anchor.web3.TOKEN_PROGRAM_ID,
    },
  });
}

module.exports = {
  listService,
  purchaseService,
};
```
```sh
## Run the client script

node your_script_name.js
```

## Program Structure

```sh
lib.rs: Contains the Solana program logic.
client.js: Contains scripts to interact with the Solana program.
