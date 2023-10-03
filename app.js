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

app.get("/pets",(req,res) => {
    return res.json(pets)
})

app.get("/pets/:id",(req,res) => {
    return res.json(pets.find(pet => pet.id === +req.params.id) )
})

app.listen(3000,() => {
    console.log("Hello server!");
})