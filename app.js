const express = require('express');
const app = express();
app.use(express.static('public'));

const PUERTO = process.env.PORT || 3000;

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor ejecutandose en el puerto :'+PUERTO);
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});
app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});