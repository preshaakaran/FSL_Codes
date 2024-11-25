// Arrow functions
const func1 = () => {
    console.log("These is Arrow Function")
    console.log("Multiple lines")
}

// Single liner arrow function
const func2 = () => console.log("Single Liner")

// Normal functions
function func3() {
    console.log("These is Arrow Function")
}

// Async functions
const asyncFunction = async () => {
    const res = await fetch('')
    console.log(res)
}

// Higher order function
const users = ["Test1", "Test2", "Test3", "Test4", "Test5"]
users.map(user => console.log(user))
const filtered = users.filter(user => user == "Test1")