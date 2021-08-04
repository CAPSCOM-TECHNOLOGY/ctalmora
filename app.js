let express=require("express");
let app=express();
const PORT=2000;
app.get("/", (req, res)=>{
    res.send("welcome");
})

app.listen(PORT, ()=>{
    console.log("Server running");
})