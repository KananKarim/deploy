import express from "express"

const app = express();

const pets = [
    {
        id:0,
        name:"Jana"
    },
    {
        id:1,
        name:"jeck"
    },
    {
        id:2,
        name:"Jji"
    }
]

app.use(express.json())

app.get("/pets",(req,res) => {
    return res.json(pets)
})

app.get("/pets/:id",(req,res) => {
    return res.json(pets.find(pet => pet.id === +req.params.id) )
})

app.post("/pets",(req,res) => {
    const id = Date.now();
    pets.push({...req.body,id})
    return res.json("Pets successfully added!")
})

app.listen(3000,() => {
    console.log("Hello server!");
})