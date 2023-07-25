const express = require("express");
const app = express();

const sendMail = require("./controller/sentMail")

app.get("/", (req, res) => {
    res.send("I am a server");
});
app.get("/mail", sendMail);

const start = async () => {
    try {
        app.listen(3400, () => {
            console.log("I am live in port no 3400");
        })
    } catch (error) { }
};
start();
