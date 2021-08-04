let express=require("express");
let app=express();
const PORT=2000;
app.get("/", (req, res)=>{
    res.send("welcome");
})
app.get("/register", (req, res)=>{
    res.send("This is register page.");
})

app.listen(PORT, ()=>{
    console.log("Server running");
})