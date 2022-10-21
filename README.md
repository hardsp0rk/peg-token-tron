# Peg Token for Tron

The reason for this repository is because [TRON JSON-RPC API](https://developers.tron.network/reference/json-rpc-api-overview) does not support the typical `eth_` calls that popular tool uses. This repository is initialized from `tronbox` which is a fork of `truffle`.

Original repository: https://github.com/hardsp0rk/peg-token

Contracts from: https://github.com/hardsp0rk/peg-token/tree/localize-dependencies

Some changes made in `localize-dependencies` branch as compared to `master`:
- All imports paths are flattened to `./`, due to tronscan being unable to verify imports paths with than one level
- Compiler version set to `0.8.6` as tronscan only supports up to this, also note that this is `tron` compiler and not `ethereum`

## Setup

To install with [yarn](https://yarnpkg.com):

```sh
yarn
```

## Test

Tested in the [original repository](https://github.com/hardsp0rk/peg-token/tree/localize-dependencies)

## Build

```sh
tronbox compile
```

## Deploy

Deploy sample token with Transparent Proxy [EIP-1967](https://eips.ethereum.org/EIPS/eip-1967):

```sh
tronbox migrate --network mainnet
```