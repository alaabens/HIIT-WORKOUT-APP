import express from "express";
const port = 8080; 
const app = express()

app.get("/",(req,res)=>{
    app.use(express.static("client"))
    res.sendFile(`${import.meta.dirname}/client/welcomePage/welcomePage.html`)
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
