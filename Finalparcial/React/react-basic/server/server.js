const express = require("express")

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) =>{
    res.send("<h1> Not a rederable API </h1>");
});

app.post("/login", (req, res) =>{
    var user = req.body.user;
    var pass = req.body.password;
    var response = {
        user: user,
        access: "Denied",
        authorization: -1
    };
    if (user === "Sebastian" && pass === "214"){
        console.log("You are logged in");
        response.access = "Granted";
        response.authorization = 1;
    } else {
        console.log("Wrong data");
    }
    res.json(response);
})
app.listen(5000, () => {
    console.log("Listening in port 5000");
});