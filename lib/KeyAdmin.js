const Configstore = require('configstore');
const pkg = require('../package.json');

class KeyAdmin {
    constructor() {
        this.conf = new Configstore(pkg.name);
    }

    setKey(key) {
        this.conf.set('apiKey', key);
        return key;
    }

    getKey() {
        const key = this.conf.get('apiKey');
        
        if (!key) {
            throw new Error('Sorry, API Key not found.');
        }
        return key;
    }

    deleteKey() {
        const key = this.conf.get('apiKey');
        
        if (!key) {
            throw new Error('Sorry, API Key not found.');
        }

        this.conf.delete('apiKey');

        return;
    }
}

module.exports = KeyAdmin;