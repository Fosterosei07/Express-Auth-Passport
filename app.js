const express = require('express');
const dotEnv = require('dotenv')




dotEnv.config();
const dbConnect = require('./dbConnect')
const User = require('./user')

const port = process.env.port || 4000;


const app = express();


app.get('/', (req, res) => {
    res.send('It is working')
})

app.use(express.urlencoded({extended:false}))

app.post('/sign-up', (req, res) =>{

    const {user_name, password, email, fullname,confirm_password} = req.body;

    res.status(200).send('login sucessfully')
})

app.listen(port, () => {
    console.log(`server connected on http://localhost:${port}`);
    dbConnect.authenticate()
})