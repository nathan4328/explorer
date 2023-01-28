export default class Token{

    constructor(unit, quantity){
        this.quantity = quantity; 
        this.unit = unit;
    }

    async getMetadata(){
      try{
        const data = await fetch('https://cardano-mainnet.blockfrost.io/api/v0/assets/'+this.unit,
          {headers:{project_id: 'mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh',
                    'cache-control': 'max-age=31536000'}});

        this.metadata = await data.json();
        this.policyId = this.metadata.policy_id;
        this.fingerprint = this.metadata.fingerprint;
        this.asset = this.metadata.asset;
        if(this.metadata.metadata != null){
          return this.metadata.metadata;
        }
        else if(this.metadata.onchain_metadata != null){
          return this.metadata.onchain_metadata;
        }
        else{
          return 'no metadata found';
        }
      }catch(error){
        console.log(error);
      }
        
    }

    getIpfsFromMetadata(){
      const keys = Object.keys(this.metadata);
      const values = Object.values(this.metadata);
      let ipfs = "";
      for(let i=0;i<keys.length;i++){


        if(keys[i] == "image"){
          ipfs = values[i];
        }
    
        if(keys[i] == "logo"){
          ipfs = "data:image/png;base64,"+values[i]
        }
      }
      try{
        if(Array.isArray(ipfs)){
          let newipfs = "";
          for(const element of ipfs){
            newipfs = newipfs + element;
          }
          if(newipfs.startsWith('ba')){
            newipfs = "http://dweb.link/ipfs/"+ipfs;
            newipfs = newipfs.replace(/,/g, '');
          }
          return newipfs;
        }
        if(ipfs.startsWith('ipfs://')){
          ipfs = ipfs.slice(7);
          if(ipfs.startsWith('ipfs/')){
            ipfs = ipfs.slice(5);
          }
          ipfs = "http://dweb.link/ipfs/"+ipfs;
        }
        if(ipfs.startsWith('ipfs/')){
          ipfs = ipfs.slice(5);
          ipfs = "http://dweb.link/ipfs/"+ipfs;
        }
        if(ipfs.startsWith('Qm')){
          ipfs = "http://dweb.link/ipfs/"+ipfs;
        }
      }catch{
        return null;
      }
      return ipfs;
    
    }
}


