import express from "express";
import bodyParser from "body-parser"
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
var theText = "";


app.use(express.static('public')); 
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    if(theText.length > 0) {
        res.render("index.ejs", {
            textHere: theText
        });
    } else {
        theText = "";
        res.render("index.ejs");
    }
});

app.get("/home", (req, res) => {
    if(theText.length > 0) {
        res.render("index.ejs", {
            textHere: theText
        });
    } else {
        theText = "";
        res.render("index.ejs");
    }
});

app.get("/write", (req, res) => {
    res.render("writeBlog.ejs", {
        textHere: theText
    });
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.post("/saved", (req, res) => {
    if(req.body["textbox"].length > 0) {
        theText = req.body["textbox"];
        res.render("index.ejs", {
            textHere: theText
        });
    } else {
        theText = "";
    }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

