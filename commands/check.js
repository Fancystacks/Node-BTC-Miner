const KeyAdmin = require('../lib/KeyAdmin');
const CoinAPI = require('../lib/CoinAPI');

const check = {
    async price(cmd) {
        try {
            keyAdmin = new KeyAdmin();
            const key = keyAdmin.getKey();

            const api = new CoinAPI(key);
            const priceOutputData = await api.getPriceInfo(cmd.coin, cmd.curr);
            
            console.log(priceOutputData);
        } catch (error) {
            console.log(error.message.red);
        }
    }
};

module.exports = check;