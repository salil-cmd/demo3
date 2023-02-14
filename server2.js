const express = require('express');
const path = require('path')
const app = express();



// rendering html files configurations
let views_path = path.join(__dirname + '/views')
app.set('view engine', 'ejs');
app.set('views', views_path)

// This help me to use req.body on the server
app.use(express.json());



app.get('/', (req, res) => {
    res.render('home2')
})


// Register user
let users = {
    '1' : {
        email : "owner",
        userId : 1,
        direct_referrals : 0,
        current_referral : 0,
        current_title : ""
    }
};

let id = 1;

app.post('/register', (req, res) => {
    let gotData = req.body;
    id++;

    let currentUser = {
        email : gotData.data1,
        userId : id,
        direct_referrals : 0,
        current_referral : gotData.data2,
        current_title : ""
    }

    // Storing in object
    users[id] = currentUser;

    // Update direct referral of the current user
    users[gotData.data2].direct_referrals++;

    // Changing title to Agent
    if(users[gotData.data2].direct_referrals == 5){
        users[gotData.data2].current_title = "Agent"
    }

    console.log(users);
    
    return res.json({
        msg : "User Registered!"
    })
})


// Listening on port 
app.listen(4000, ()=>{
    console.log("Listening on port 3000...");
})