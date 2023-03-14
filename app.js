const express           = require("express");
const app               = express();
const port     = process.env.PORT || 8000;



app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


//Routes
app.get("/", (req, res) => {
    res.render("home");
});

app.use((req, res, next) => {
    res.status(404).send("404: Page Not Found");
});



// Tell Express to Listen request
app.listen(port, () => {
    console.log(`Server has started at http://localhost:${port}`);
});
