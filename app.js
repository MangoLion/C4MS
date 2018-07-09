var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static('public'))
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/studentView/index.html'));
});

app.get('/admin', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/adminView/index.html'));
});


server.listen(8080);


var index = 0;

io.on('connection', function(client) {
    console.log('Client connected...');

    client.on('login', function(data) {
           console.log(data);
           data.index = index;
           data.Text = data.id;
           logins.push(data);

           index ++;
    });

    client.on('session card', function(data) {
           console.log(data);
           data.index = index;
           data.Text = data.id;
           cards.push(data);

           index ++;
    });

    client.on('admin request', function(data) {
            data.Text = data.id;
           client.emit('admin data', { logins: logins, cards: cards });
    });

    client.on('delete login', function(data) {
          var deleteIndex = data.index;
          for (var a = 0; a < logins.length; a ++){
            if (logins[a].index == deleteIndex)
              logins.splice(a, 1);
          }
    });

    client.on('delete card', function(data) {
          var deleteIndex = data.index;
          for (var a = 0; a < cards.length; a ++){
            if (cards[a].index == deleteIndex)
              cards.splice(a, 1);
          }
    });

});

logins = [];
cards = [];
