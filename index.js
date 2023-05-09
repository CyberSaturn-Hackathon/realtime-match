var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const port = 3000;
let SESSION_POINTS_DATA = null;

app.set('view engine', 'ejs');

io.on('connection', (socket)=>{
    socket.on('sendPoints', (res)=>{
        const {pointsA, pointsB} = res;
        SESSION_POINTS_DATA = {pointsA, pointsB};
        io.emit('showPoints', res);
    })
});

app.get('/', (req,res)=>{
    res.render('index');
});

app.get('/adm', (req,res)=>{
    res.render('admin')
})

app.get('/session/points', (req,res)=>{
    return res.json(SESSION_POINTS_DATA);
});

http.listen(port, ()=>{
    console.log('Server is running in http://localhost:' + port);
});