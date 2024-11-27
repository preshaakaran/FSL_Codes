const mongoose = require("mongoose");

mongoose.connect("your_mongodb_uri", { useNewUrlParser: true, useUnifiedTopology: true });

const itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
});
const Item = mongoose.model("Item", itemSchema);

// Create
const newItem = new Item({ name: "Item1", price: 2000, category: "Other" });
newItem.save();

// Read
Item.find().then(items => console.log(items));

// Update
Item.updateOne({ name: "Item1" }, { price: 3000 })
    .then(() => console.log("Item Updated Successfully!"))
    .catch(() => console.log("Some error in updating value"));

// Delete 
Item.deleteOne({ name: "Updated Item" })
    .then(() => console.log("Item Deleted Successfully!"))
    .catch(() => console.log("Some error in deleting Item"))
