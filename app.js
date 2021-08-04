let express=require("express");
let app=express();
let path=require("path");
const PORT=2000;
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine","ejs");

app.get("/", (req, res)=>{
    res.render("home");
})
app.get("/register", (req, res)=>{
    res.render("register");
})
app.get("/login", (req, res)=>{
    res.render("login");
})

app.listen(PORT, ()=>{
    console.log("Server running");
})