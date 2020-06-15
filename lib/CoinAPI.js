const axios = require('axios');
const colors = require('colors');

class CoinAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
    }
    
    async getPriceInfo(coinOption, currOption) {
        try {
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: currOption
            });

           const res = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${currOption}`); 
        
           let output = '';
           res.data.forEach(coin => {
               output += `\n${coin.name.green} (${coin.symbol.green}) | Price: ${formatter.format(coin.price).yellow} | Rank: ${coin.rank.blue} | Supply: ${coin.circulating_supply.yellow} | Price Change: ${coin['ytd'].price_change_pct.red}% YTD\n`;
           });

           return output;
        } catch (error) {
            handleAPIerr(error);
        }
    }
}

function handleAPIerr(error) {
    if(error.response.status === 401) {
        throw new Error('Sorry, API key is invalid.');
    } else if (error.response.status === 404) {
        throw new Error('Sorry, server is not responding.'); 
    } else {
        throw new Error('Something went wrong. Please try again.');
    }
}

module.exports = CoinAPI;