
 require('./server')().then((rpcServer)=>{
    
    require('./client')(rpcServer).catch(console.error)
 }).catch(console.error)
