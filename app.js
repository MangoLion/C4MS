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

    client.on('profile request', function(data){
        if (!getStudent(data.id)){
            registerStudent(data.id);
       }
        client.emit('profile data', {profile: getStudent(data.id) });
    });

    client.on('login', function(data) {
           console.log(data);
           data.index = index;
           data.Text = data.id;
           logins.push(data);

           if (!getStudent(data.id)){
                registerStudent(data.id);
           }
           client.emit('profile data', {profile: getStudent(data.id) });
           index ++;
    });

    client.on('session card', function(data) {
           console.log(data);
           data.index = index;
           data.Text = data.id;
           cards.push(data);

           if (!getStudent(data.id)){
                registerStudent(data.id, data.name);
            }

            giveExp(getStudent(data.id));

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

    client.on('delete all cards', function(data) {
        cards = [];
  });

    client.on('log request', function() {
        var log = [];
        log.push(["StudentID", "Date", "Time", "Duration", "Center", "Reason","CourseSubject", "TermID", "Notes"]);
        cards.forEach(entry => {
            var row = [entry.id, entry.date, standardToMilitary(entry.time), 1, "Math Center", entry.reason, entry.courseName, "201803", entry.notes];
            log.push(row);
        });

        var csvContent = "data:text/csv;charset=utf-8,";
        log.forEach(function(rowArray){
            var row = rowArray.join(",");
            csvContent += row + "\r\n";
         }); 
        client.emit('log string', { logString:csvContent});
  });

});

logins = [];
cards = [];
profiles = {};

function getStudent(id){
    var student = profiles["#"+id];
    if (!student)
        return;

    student.nextReward = rewards[student.level];
    return student;
}

function registerStudent(id){
    var student = {
        id: id,
        exp: 0,
        toNextLevel: levelCaps[0],
        nextReward: "",
        level: 0,
        rewards: []
    }

    profiles["#"+id] = student;
    console.log(profiles);
}

levelCaps = [20, 40, 60, 80, 100];
rewards = ["hat", "mug", "t-shirt"];
function giveExp(student){
    var expRate = 10;
    student.exp += expRate;
    var levelCap = levelCaps[student.level];
    if (student.exp > levelCap){
        var carryOver = student.exp - levelCap;
        student.level ++;
        student.exp = carryOver;
    }
    student.toNextLevel = levelCap - student.exp;
}

function standardToMilitary(timeString){
    var hours = Number(timeString.match(/^(\d+)/)[1]);
    var minutes = Number(timeString.match(/:(\d+)/)[1]);
    var AMPM = timeString.match(/\s(.*)$/)[1];
    if(AMPM == "PM" && hours<12) hours = hours+12;
    if(AMPM == "AM" && hours==12) hours = hours-12;
    var sHours = hours.toString();
    var sMinutes = minutes.toString();
    if(hours<10) sHours = "0" + sHours;
    if(minutes<10) sMinutes = "0" + sMinutes;
    return sHours + ":" + sMinutes;
}