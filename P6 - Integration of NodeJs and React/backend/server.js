const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 5000;

app.use(express.json())
app.use(cors())

const data=[
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
    res.json(data)
})

app.listen(5000,(req,res)=>{
    console.log(`Server running on Port ${PORT}`)
})