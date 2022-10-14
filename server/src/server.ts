import express from 'express'

const app = express()
// create first route
//first parameter will the address the user will be accessing for example: www.uol.com/brasil (i need to use everything after / including it)

// and the second is what function will be execute when the user acess the route /ads 
app.get('/games', (request, response) => {
  return response.json([]);
})

app.post('/ads', (request, response) => {
  return response.status(201).json([]);
})


app.get('games/:id/ads', (request, response) => { //id is a params so i need ':'
  //req => search for info inside the request and res => returns the request

  //const gameId = request.params.id;

  //return response.send(gameId);


  return response.json([
    { id: 1, name: 'Ad 1' },
    { id: 2, name: 'Ad 2' },
    { id: 3, name: 'Ad 3' },
    { id: 4, name: 'Ad 4' },
    { id: 5, name: 'Ad 5' },
  ])
})

app.get('ads/:id/ads', (request, response) => {
  //const adId = request.params.id;

  return response.json([

  ])
})
app.listen(3333)