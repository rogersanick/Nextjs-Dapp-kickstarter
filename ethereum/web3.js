import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser & metamask is running.
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  const currentProvider = new Web3.providers.WebsocketProvider(
    'wss://rinkeby.infura.io/v3/cff505b264bb479b9df907c80ee66f5f'
  );

  web3 = new Web3(currentProvider);
}

export default web3;