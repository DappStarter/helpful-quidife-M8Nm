require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth shift pudding good enroll off genuine'; 
let testAccounts = [
"0xac35e0965b9ea0309e5e358405e0d33c4654fed6247e0e854fa9f4fbac854864",
"0x8c9324e1fb9912809ac35d1a2a13f50f370f7d73b7942eb3f59187d9a19ed602",
"0xe63f7ce1006400bebdbf8f1370f18e848a06066afe92852be06e72682954ae9f",
"0x7b9c525670a2d7e763275b30c522c7a66c9ec90cd87f480b30ebceb47d54e5d2",
"0xab18f23c435bf2dd071c92da7c222ee1211d91b308a06ce205178eca19b8b0e0",
"0xeb78daad1f8e101f3f22db6e2892ca7851c94093104522724a900559caf953a5",
"0xfb0bc9c755701532dde76af697d59f90a57b9ecb42e85e77ea65ee5a6b95a68a",
"0xd191d9bf81bf4fdef6e3a72f31f19358148bdb7641777949df4221029497db44",
"0xc3ced3f5cf4da6e28ad36b12cef0cb5be0a91d7d16da5c88413ffb70cca47dd0",
"0x56140ffa726912c32a14185b6fcc6ca4e2fbce25b75a2bbc4dd44f4d95d38025"
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

