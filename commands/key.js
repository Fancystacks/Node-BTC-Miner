const inquirer = require('inquirer');
const colors = require('colors');
const { isRequired } = require('../utils/validation');
const KeyAdmin = require('../lib/KeyAdmin');

const key = {
    async set() {
        const keyAdmin = new KeyAdmin();
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter Nomics API Key '.blue + 'https://nomics.com',
                validate: isRequired
            }
        ]);

        const key = keyAdmin.setKey(input.key);
        if (key) {
            console.log('API key added.'.green);
        }
    },
    show() {
        try {
            const keyAdmin = new KeyAdmin();
            const key = keyAdmin.getKey();
            console.log(`Current API Key: ${key.yellow}`);

            return key;
        } catch (error) {
            console.error(error.message.red);
        }
    },
    remove() {
        try {
            const keyAdmin = new KeyAdmin();
            keyAdmin.deleteKey();
            console.log('API Key has been deleted.'.blue);

            return key;
        } catch (error) {
            console.error(error.message.red);
        }
    }
}

module.exports = key;
