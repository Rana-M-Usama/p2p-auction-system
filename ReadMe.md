
# Auction System with P2P Clients

This project implements an auction system where multiple clients, located in different regions of the world, interact with a centralized broadcast server-client. Each client is created on a separate port and communicates with the server-client using Remote Procedure Calls (RPC). The server-client broadcasts auction-related messages to all connected clients, facilitating the auction process.

## Summary

The code consists of three main components:

1. **Server-Client**: The `server.js` file sets up the centralized broadcast server-client using RPC for communication. It broadcasts auction-related messages to all connected clients.

2. **Client Creation**: The `index.js` file is responsible for creating and connecting multiple clients dynamically using the `client.js` file. It reads client configurations from the `clients.js` file and uses RPC to communicate with the server-client.



## Features


- **RPC Communication**: Remote Procedure Calls (RPC) are used for communication between clients and the server-client.
- **Auction Operations**: Clients can perform various auction-related operations such as opening an auction, placing bids, and closing auctions.

## Setup


2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server-client:
   ```bash
   npm start
   ```

## Usage

1. Define client configurations in the `clients.js` file. Each client should have a unique host, port, and auction details.
2. Run the main script to create and connect clients:
   ```bash
   node index.js
   ```

## Configuration

- **Client Configuration**: Update the `clients.js` file to define client details such as host, port, and auction information.
- **Server-Client Configuration**: The server-client configuration can be adjusted in the `server.js` file.

## Dependencies

- [@hyperswarm/rpc](https://www.npmjs.com/package/@hyperswarm/rpc): For RPC communication.
- [crypto](https://nodejs.org/api/crypto.html): For cryptographic operations.
- [hyperbee](https://www.npmjs.com/package/hyperbee): For distributed key-value storage.
- [hypercore](https://www.npmjs.com/package/hypercore): For distributed append-only logs.
- [hyperdht](https://www.npmjs.com/package/hyperdht): For Distributed Hash Table (DHT) implementation.



