const bodyParser = require("body-parser");
const express = require('express')
const app = express()
const path = require('path');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));
app.engine("html" , require("ejs").renderFile);
app.set("view engine","ejs");

const family = ["Gabriel", "Ana", "Adi", "Jose", "Caro"];
let name = "Gabriel";

app.get('/', (req, res) => {
  res.render("index",{ name: name, family, family });
});

app.get('/about', (req, res, next) => {
    var loc_name = req.query.name;
    //console.log(name);
    //res.send("<h1>Hello " + name + "</h1>");
    if(!loc_name){
    const error = new Error("Missing name value");
    error.status = 400;
    next(error);
    } else {
        name = loc_name;
        res.redirect("/");
    }
}, (err,req,res,next)=>{
    console.error(err,stack);
    res.status(500),render("error", {
        message: err.status + " " + err.message,
    });
});

app.get('/about/:name/detail', (req, res) => {
    var name = req.params.name;
    console.log(name);
    res.sendFile('wazzup.html', { root: path.join(__dirname, './public/html')});
});

app.get('/secure', (req, res) => {
    res.send('This is a secure location');
});

app
    .route("/login")
    .get((req, res) => {
    var name = req.query.username;
    var pass = req.query.password;
    res.send("<h1> Hello " + name + ", You are now logged in</h1>");
})
    .post((req, res) => {
    var name = req.body.username;
    var pass = req.body.password;
    res.send("<h1> Hello " + name + ", You are now logged in POST</h1>");
});

app.use((err, req, res, next)=>{
    console.error(err.stack);
    res
        .status(500)
        .render("error", {
            message: err.message,
        });
});

app.listen(3000, () =>{
    console.log("Listening on port 3000");
});