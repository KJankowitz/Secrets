//To see how the final website should work, run "node solution.js".

//The password is ILoveProgramming
import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const _dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var userPW = "";
var auth = false;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.sendFile(_dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    userPW = req.body["password"];
    if (userPW === "ILoveProgramming") {
        res.sendFile(_dirname + "/public/secret.html");
    }
    else {
        console.log("Wrong Password");
        res.sendFile(_dirname + "/public/index.html");
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
