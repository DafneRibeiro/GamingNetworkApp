import express from 'express'

const app = express()
// create first route
//first parameter will the address the user will be accessing for example: www.uol.com/brasil (i need to use everything after / including it)

// and the second is what function will be execute when the user acess the route /ads 
app.get('/ads', (request, response) => {
  //req => search for info inside the request and res => returns the request
  return response.json([
    { id: 1, name: 'Anuncio 1' },
    { id: 2, name: 'Anuncio 2' },
    { id: 3, name: 'Anuncio 3' },
  ])
})

app.listen(3333)