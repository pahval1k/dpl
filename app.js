var express = require('express');
var app = express();
var path = require('path');
var fileSystem = require('fs');
var bodyParser = require('body-parser');
var passwordHash = require('password-hash');

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/jsApp.js', express.static(__dirname + '/jsApp.js'));
app.use('/styles.css', express.static(__dirname + '/styles.css'));
app.use('/app', express.static(__dirname + '/app'));
app.use('/lang', express.static(__dirname + '/lang'));
app.use(bodyParser.json()); // for parsing application/json



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});




app.post('/userEntry', function (req, res) {
    if (!req.body) return res.sendStatus(400)
    fileSystem.readFile(__dirname + '/data/users.js', 'utf8', function (err, data) {
        if (err) throw err; // err during reading the file

        try {
            var obj = JSON.parse(data);
        } catch (e) {
            throw "error during json parsing"; //error during json parsing
        }

        var userInformation = {};

        for (var key in obj) {
            if (obj[key]['email'] === req.body.email && passwordHash.verify(req.body.password, obj[key]['password'])) {
                userInformation.email = obj[key]['email'];
                userInformation.age = obj[key]['age'];
                userInformation.birthDate = obj[key]['birthDate'];
                userInformation.aboutUser = obj[key]['aboutUser'];
                break;
            }
        }
        res.send(userInformation);
    });
});

app.listen(3000, function () {
    console.log(`Server running`);
});