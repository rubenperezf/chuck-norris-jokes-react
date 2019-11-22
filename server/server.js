const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PORT = 2500

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/todos', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect("mongodb+srv://hola:hola@cluster0-im5lw.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())


const jokeSchema = new mongoose.Schema({
    joke: {
        type: String,
        required: true
    },
    categories: {
        type: Array,
        required: true
    }
})
const JokeModel = mongoose.model('jokes',jokeSchema)
const postJoke = async (request, response) => {
    try {
        console.log("POST JOKE")
        var jokeInstance = new JokeModel(request.body)
        console.log(jokeInstance)
        const created = await JokeModel.create(jokeInstance)
        response.send(created)
    } catch (error) {
        response.status(500).send(error)
    }
}

const getJokes= async (request, response) => {
    try{
        console.log("GET JOKE")
        var jokeInstance = await JokeModel.find({})
        console.log(jokeInstance)
        response.send({ "type": "success", "value":jokeInstance})

    } catch(error){
        response.status(500).send(error)
    }
}

app.route('/jokes')
    .post(postJoke)
    .get(getJokes)


app.listen(PORT,()=>{
    console.log(` App running on port ${PORT}`)
})


