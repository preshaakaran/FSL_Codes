const express = require('express');

const app = express();

const PORT=5000

app.use(express.json());

let data=[
    {
        id: 1,
        price: 50000,
        value: "Laptop"
    },
    {
        id: 2,
        price: 20000,
        value: "Mobile"
    },
    {
        id: 3,
        price: 5000,
        value: "Headphones"
    },
    {
        id: 4,
        price: 2500,
        value: "Watch"
    }
];


app.get('/',(req,res)=>{
    res.json(data);
})


app.post('/',(req,res)=>{
    const {price,value}=req.body;
    const item = {id:Date.now(),price,value}
    data.push(item)
    res.json(item)
})

app.get('/:id',(req,res)=>{
    const {id}=req.params
    const item = data.find((t)=>t.id==id)
    res.json(item)
})

app.put('/:id',(req,res)=>{
    const {id}=req.params
    const {price,value}=req.body;
    const item = data.find((t)=>t.id==id)
    if(item){
        item.price=price,
        item.value=value
    }
    res.json(item)
})

app.patch('/:id',(req,res)=>{
    const {id}=req.params;
    const {price,value}=req.body;
    const item = data.find((t)=>t.id==id)
    if(item){
        if(price!==undefined) item.price=price;
        if(value!==undefined) item.value=value;
        res.json(item)
    }else{
        res.status(404).json({message: "Item not found" });
    }
    
})


app.delete('/:id',(req,res)=>{
    const {id}=req.params
    data = data.filter((t)=>t.id!=id)
    res.json(data)
})

app.listen(PORT,(req,res)=>{
    console.log(`Server running on port ${PORT}`)
})


