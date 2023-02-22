const express = require('express')
const app = express()
const PORT = 8000


const avengers ={
'iron man' : {
    'movies': 'Iron Man, Iron Man 2, Iron Man 3',
    'releaseYear': '2008,2010,2013'
},

'captain america' : {
    'movies': 'Captain America: The First Avenger, Captain America: The Winter Soldier, Captain America: Civil War',
    'releaseYear': '2011,2014,2016'
},

'black widow' : {
    'movies': 'Black Widow',
    'releaseYear': '2021'
},

'hulk' : {
    'movies': 'The Incredible Hulk',
    'releaseYear': '2008'
},

'thor' : {
    'movies': 'Thor, Thor: The Dark World, Thor: Ragnarok, Thor:Love and Thunder',
    'releaseYear': '2011, 2013, 2017, 2022'
},

'hawkeye': {
    'movies': "Does not have a stand alone movie but does have a show titled 'Hawkeye'",
    'releaseYear' : '2021' 
},

'unknown' : {
    'movies': 'unknown',
    'releaseYear': '0'
}
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response)=>{
    const avengerName = request.params.name.toLowerCase()
    if(avengers[avengerName]){
        response.json(avengers[avengerName])
    } else {
        response.json(avengers['unknown'])
    }
    
})

app.listen(PORT, ()=>{
    console.log(`the server is now running on port: ${PORT}. better go catch it`)
})