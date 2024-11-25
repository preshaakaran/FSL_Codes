const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const bookSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

const Book = mongoose.model("Books",bookSchema)

app.post('/',async(req,res)=>{
    try{
        const books = new Book(req.body);
        const savedBook = await books.save()
        res.status(201).json(savedBook);
    }catch(error){
        res.status(400).json({ error: error.message });

    }
})

app.get('/',async(req,res)=>{
    try {
        const allBooks = await Book.find({});
        res.json(allBooks)
        
    } catch (error) {
        res.status(400).json({ error: error.message });
        
    }
})

app.get('/:id',async(req,res)=>{
    const { id }=req.params
    try {
        const books = await Book.findById(id)
        if (!books) {
            return res.status(404).json({ error: 'Book not found' })
        }
        res.json(books)
        
    } catch (error) {
        res.status(400).json({ error: error.message });
        
    }
})

app.put('/:id',async(req,res)=>{
    const { id }= req.params
    try {
        const books = await Book.findByIdAndUpdate(id,req.body,{ new: true});
        if (!books) {
            return res.status(404).json({ error: 'Book not found' })
        }
        res.json(books)
        
    } catch (error) {
        res.status(400).json({ error: error.message });
        
    }
})

app.delete('/:id',async(req,res)=>{
    const { id }= req.params
    try {
        const books = await Book.findByIdAndDelete(id);
        if (!books) {
            return res.status(404).json({ error: 'Book not found' })
        }
        res.json(books)
        
    } catch (error) {
        res.status(400).json({ error: error.message });
        
    }
})



mongoose.connect('mongodb+srv://karanpresha:rJ3QUhliHSdkQ3Wk@cluster0.yg2it.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{console.log("Connected to MongoDB")}).catch((err)=>{console.log(err)})

app.listen(PORT,(req,res)=>[
    console.log(`Server is running on port ${PORT}`)
])