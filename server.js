const express = require('express');
const path = require('path')
const app = express();



// web3
const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3');
const provider = new HDWalletProvider(
    "bind primary harvest hole negative job mixed bar dog pipe enact extend",
    "HTTP://127.0.0.1:7545"
 
);
const web3 = new Web3(provider);



// rendering html files configurations
let views_path = path.join(__dirname + '/views')
app.set('view engine', 'ejs');
app.set('views', views_path)

// This help me to use req.body
app.use(express.json());



app.get('/', (req, res) => {
    res.render('home')
})


app.post('/sendMoney', async (req, res) => {
    const accountFromMetaMask = req.body.account;
    const receiverOfEther = req.body.receiver;
    let tx = await web3.eth.sendTransaction({
        from : accountFromMetaMask,
        to : receiverOfEther,
        value : web3.utils.toWei('2', 'ether')
    });

    return res.json({
        receipt : tx
    })
})


 

app.listen(5000, ()=>{
    console.log("Listening on port 3000...");
})