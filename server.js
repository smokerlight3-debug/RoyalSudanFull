const express=require('express');
const mysql=require('mysql2');
const app=express();
app.use(express.json());

const db=mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'RoyalSudanResto'
});

app.post('/order',(req,res)=>{
const {name,phone,address,items,total}=req.body;
db.query(
'INSERT INTO CustomerOrders (customer_name,phone_number,delivery_address,order_content,total_price) VALUES (?,?,?,?,?)',
[name,phone,address,JSON.stringify(items),total],
(err)=>{if(err) return res.status(500).send(err); res.send("saved");}
);
});

app.listen(3000);
