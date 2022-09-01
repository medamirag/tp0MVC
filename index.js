const {cnxdb} = require('./config/db');

const {patientRoute} = require('./routes/patientRoute')

const express=require('express');
const bp=require('body-parser')
const app=express();
app.use(express.json())
app.use(bp.json())
app.use('/patient',patientRoute)



const port = 4000

app.listen(port,()=>{

    console.log("Server Started Successfully at Port ",port);
})