---
title: "ICP Token Wallet"
description: "Rust-based token wallet for the Internet Computer Protocol (ICP)"
date: "Dec 28 2024"
demoURL: ""
repoURL: "https://github.com/Harshcreator/ICP-Token-Wallet"
---


This project implements a Rust-based token wallet for the Internet Computer Protocol (ICP). The wallet provides functionality for securely managing token balances, transferring tokens between accounts, and querying balances. It is designed to ensure security, correctness, and extensibility.

## Features

### Core Functionality

1. **Token Ledger Management**
   - Tracks balances for all principals (accounts) in a `HashMap`.
   - Maintains the owner of the wallet.

2. **Token Transfers**
   - Allows a principal to transfer tokens to another principal.
   - Enforces balance checks to prevent overdrafts.

3. **Token Reception**
   - Allows a principal to receive tokens from another account.

4. **Balance Queries**
   - Provides the balance of the caller (owner of the wallet).
   - Allows querying the balance of any specific principal.

### Security Features

- **Access Control**:
  - Only the wallet owner is set during initialization.
  - Token transfers validate the caller’s balance before proceeding.

- **Error Handling**:
  - Uses a robust error system with `WalletError` for invalid amounts, insufficient balances, or unauthorized actions.

- **Testing Environment**:
  - Uses mock callers for comprehensive testing without relying on live deployment.

### Tests

The project includes unit tests to validate the functionality and robustness of the wallet:

1. **Initial Balance Test**
   - Ensures that the wallet is initialized correctly with the owner and an empty balance.

2. **Receive Tokens Test**
   - Verifies that a principal can receive tokens and their balance is updated accordingly.

3. **Transfer Tokens Test**
   - Ensures tokens can be transferred between principals, enforcing balance constraints.

## Code Overview

### Main Components

#### `TokenLedger`
A structure that maintains:
- `balances`: A `HashMap` mapping principals to their respective balances.
- `owner`: The principal who owns the wallet.

#### Wallet Functions

- `init(owner: Principal)`
  - Initializes the token ledger with the provided owner.

- `transfer(to: Principal, amount: u64) -> WalletResult<()>`
  - Transfers tokens from the caller to another principal.
  - Validates that the caller has sufficient balance and that the amount is non-zero.

- `receive_tokens(_from: Principal, amount: u64) -> WalletResult<()>`
  - Allows a caller to receive tokens, updating their balance.

- `balance() -> u64`
  - Returns the caller’s current balance.

- `balance_of(account: Principal) -> u64`
  - Queries the balance of a specific principal.

#### Error Handling

- `WalletError`
  - `InsufficientBalance`: Raised when a caller tries to transfer more tokens than they have.
  - `Unauthorized`: (Placeholder for future access control features.)
  - `InvalidAmount`: Raised when an invalid token amount (e.g., zero) is provided.

### Tests

The following tests are implemented in the `tests` module:

1. **Test Initial Balance**
   - **Setup**: Initialize the wallet with the owner.
   - **Verification**: Assert that the owner’s balance is zero.

2. **Test Receive Tokens**
   - **Setup**: Initialize the wallet, set the caller as the owner, and call `receive_tokens` with a specified amount.
   - **Verification**: Assert that the owner’s balance is updated correctly.

3. **Test Transfer Tokens** (Future)
   - This test should validate transferring tokens between accounts and enforcing balance constraints.

### Security Considerations

1. **Balance Validation**:
   - The `transfer` function ensures that the sender has sufficient tokens before executing the transaction.

2. **Caller Isolation**:
   - Mock callers are used in tests to simulate real-world scenarios without compromising security.

3. **Error Safety**:
   - Errors are clearly defined and handled to prevent unexpected failures.

4. **Replay Protection** (Future):
   - Mechanisms like transaction IDs or timestamps could be implemented to prevent replay attacks.

## Usage

### Prerequisites

- Install the Internet Computer SDK (`dfx`).
- Install Rust and `cargo`.

### Setup

1. **Clone the Repository:**
   
2. **Install Dependencies:** Ensure you have the dfx command-line tool set up.

3. **Build the Project:**
```bash
cargo build
```

### Deployment

1. **Start the Local Replica:**
   ```bash
   dfx start --clean
   ```

2. **Create the Canister:**
   ```bash
   dfx canister create token_wallet
   ```

3. **Build the Canister:**
   ```bash
   dfx build
   ```

4. **Deploy the Canister:**
   ```bash
   dfx canister install token_wallet --argument '(principal "2vxsx-fae")'
   ```

### Interaction

- **Check Balance:**
  ```bash
  dfx canister call token_wallet balance
  ```

- **Receive Tokens:**
  ```bash
  dfx canister call token_wallet receive_tokens '(principal "<from-principal>", 100)'
  ```

- **Transfer Tokens:**
  ```bash
  dfx canister call token_wallet transfer '(principal "<to-principal>", 50)'
  ```

## Future Enhancements

1. **Access Control for Transfers**
   - Restrict certain actions to specific principals.

2. **Enhanced Error Reporting**
   - Provide detailed error logs for failed transactions.

3. **Transaction History**
   - Maintain a log of all transfers for auditing purposes.

4. **Replay Protection**
   - Implement mechanisms to prevent duplicate transactions.

5. **Integration with ICP Ecosystem**
   - Support for advanced token standards and interoperability with other canisters.

## Conclusion

The ICP Token Wallet is a foundational implementation for managing tokens on the Internet Computer. Its modular and secure design ensures a reliable user experience, with ample room for enhancements to meet future requirements.

