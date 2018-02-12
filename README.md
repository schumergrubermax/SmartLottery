# Smart Contract Workshop

### From Contract to DApp

Make sure, all packages are installed. Since you switched branches, type `npm install` again to get all
missing packages for the frontend application in your `SmartLottery` directory.

### Connecting to web3

In order to make any UI able to "speak" via RPC calls, you may use [Ethereums web3.js](https://github.com/ethereum/web3.js/) library.
It creates a connection to a web3-capable client, just like `testrpc` and may communicate over a specified URL and port.
If you followed the instructions, testrpc you started used no specific port or url. This defaults to `http://localhost:8545` respectively `http://127.0.0.1:8545`.

Usually, any Ethereum client software such as geth, parity or the simulated testrpc is capable of assigning custom IPs/domains and ports.

In `src/js/app.js` your Decentralized Application is trying to connect to a client via web3.
```
if (typeof web3 !== 'undefined') {
   App.web3Provider = web3.currentProvider;
 } else {
   App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
 }
```
This snippet as defined by web3.js tries to connect to a web3 provider/a blockchain it can talk to via RPC calls.

### Providing web3 endpoint

In order to connect to the fronted-application with above snippet, you need to run a client, that connects to a blockchain node. In our case, we will use Metamask.
Make sure testrpc is still running and copy the 12 word mnemonic into memory again.

In your browser you should find Metamask installed, accept all agreements and proceed in choosing a network different from the Ethereum Mainnet.
You may set the network in Metamask to "Localhost 8545" or to "Custom RPC". If you chose "Custom RPC", then enter `http://127.0.0.1:8545` as RPC connection.

After setting the correct network to our testrpc-node, click "Logout" inside Metamask (Burger Menu Icon) and re-login using 
the option "Restore with seed-phrase", as if you had forgotten your password. Here you may enter the 12 word menomic words
to restore the accounts, as shown in testrpc inside of Metamask. Choose some easy to remember password, you will use those
accounts only locally.

Your Metamask account should now show the first account as listed in testrpc prefilled with testether.
![Metamask Account](./notes/01_metamask.png)

### Running the Lottery web app

To spin up the frontend, in your main directory `SmartLottery` run the command `npm run dev` to get the DApp running.

### Congratulations!