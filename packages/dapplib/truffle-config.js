require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note shift promote good knife force seat'; 
let testAccounts = [
"0xd52e22b9007cec0b15af29ea543b3c1a7fe550b92347d3bea92d0c6199623630",
"0xab00055109ab193c550c928a52f52109148f774fd27d2f8c889c19c53c95e3f5",
"0x00d6e3e65dd1634d3e4bbe1331b9e143e208f6d24e1a825211fdfc19bcbb34ed",
"0x37f3f84066f0171b5cfa24a553f7a3a48271f614e2e2d480766902b6ae4567ae",
"0x849dcdcdb0fe565e13d1696033655828b50eff844c3768d868bf86d3efc8e935",
"0x4e3cd49622aee6ec9d60b5282800e6298e67f2e7255eb148d0962364031f4f1b",
"0xf4d99a14bb53bb65e8d934a5dcb6755e910806b9b72802f2c15db43ea3dffb41",
"0xd840ebb255372cafef04c02b32e91e7d1f3fbd4cf96c240d3dcd050beb39b9a3",
"0x93d5dd6435725eeeebaa78ea974a0baab6d13f0d43e6a8599e6bb54146ff9b9f",
"0xa8c79999fb871b7f4c744843358f7a39c335fabc71171de6a6d36d53db82a990"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

