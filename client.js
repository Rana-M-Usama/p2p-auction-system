'use strict'
const RPC = require('@hyperswarm/rpc')
const DHT = require('hyperdht')
const Hypercore = require('hypercore')
const Hyperbee = require('hyperbee')
const crypto = require('crypto')
const clients= require('./mockClientDb')
const createClient = async (client) => {
    // Get or generate DHT seed
   
    const dhtSeed = crypto.randomBytes(32);
  
    // Start the DHT
    const dht = new DHT({
      port: client.port,
      keyPair: DHT.keyPair(dhtSeed),
      bootstrap: [{ host: '127.0.0.1', port: 30001 }]
    });
    await dht.ready();
  
    // Get or generate RPC seed
    const rpcSeed = crypto.randomBytes(32);
  
    // Setup RPC client
    const rpc = new RPC({ seed: rpcSeed, dht });
    const rpcClient = rpc.createServer()
   
    // Example: Open Auction
    const openAuctionReq = {
      auctionId: client.auctionDetail.id,
      item: client.auctionDetail.item,
      startingPrice:client.auctionDetail.item
    };
      rpcClient.respond('openAuction', Buffer.from(JSON.stringify(openAuctionReq), 'utf-8'));
    
  
    // Example: Place Bid
    const bidReq = {
      auctionId: '12345',
      bidder: 'Client#2',
      amount: '75 USDt'
    };
    const bidResp =  rpcClient.respond('makeBid', Buffer.from(JSON.stringify(bidReq), 'utf-8'));
   
    // Example: Close Auction
    const closeAuctionReq = {
      auctionId: '12345',
      winner: 'Client#2',
      amount: '75 USDt'
    };
     rpcClient.respond('closeAuction', Buffer.from(JSON.stringify(closeAuctionReq), 'utf-8'));
   
  };
const main = async () => {

   await Promise.all(clients.map(async(client)=>{
        await createClient(client)
    }))
}

module.exports=main