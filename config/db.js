const mysql=require('mysql2');
const cnx=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    port:3306,
    database:'tekniva'
})
const cnxdb = cnx.connect((err)=>{
if(err){
    console.log(err);

}
else{
    console.log("Connextion db Success");

}
})

module.exports = {cnxdb,cnx}
