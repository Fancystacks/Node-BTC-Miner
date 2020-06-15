const axios = require('axios');
const colors = require('colors');

class CoinAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
    }
    
    async getPriceInfo(coinOption, currOption) {
        try {
           const res = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${currOption}`); 
        
           let output = '';
           res.data.forEach(coin => {
               output += `Coin: ${coin.symbol.green} ${coin.name} | Price: ${coin.price} | Rank: ${coin.rank}`;
           });

           return output;
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = CoinAPI;