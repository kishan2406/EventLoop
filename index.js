const express=require("express")
 
const app = express();

app.get("/route",function(req,res){
 
    return hello;

    res.send("helloiii")
});

app.get("/books",function(req,res){

    var data = [{
        "name": "Wings of Fire"
    },
    {
        "name": "Karam yog"
    },
    {
        "name": "The Power of SubConsucious Brain"
    },
    {
        "name": "How TO Eat That Frog "
    }
]
res.send(data)
});

app.listen(5000,()=>{

    console.log("kishan")
})