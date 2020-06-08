const inquirer = require('inquirer');
const colors = require('colors');
const KeyAdmin = require('../lib/KeyAdmin');

const key = {
    async set() {
        const keyAdmin = new KeyAdmin();
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter Nomics API Key '.blue + 'https://nomics.com'
            }
        ]);

        const key = keyAdmin.setKey(input.key);
        if (key) {
            console.log('API key added.');
        }
    },
    show() {
        console.log('set show');
    },
    remove() {
        console.log('set remove');
    }
}

module.exports = key;
