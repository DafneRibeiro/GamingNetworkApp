import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()

app.use(express.json()) // to tell express I am using a json.

const prisma = new PrismaClient()
// create first route
//first parameter will the address the user will be accessing for example: www.uol.com/brasil (i need to use everything after / including it)

// and the second is what function will be execute when the user acess the route /ads 
app.get('/games', async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads:
            true,
        }
      }
    }
  })

  return response.json(games);
})

app.post('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id;
  const body = request.body;

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      hourStart: body.hourStart,
      hourEnd: body.hourEnd,
      useVoiceChannel: body.useVoiceChannel,
    }
  })

  return response.status(201).json(body);
})


app.get('/games/:id/ads', async (request, response) => { //id is a params so i need ':'
  //req => search for info inside the request and res => returns the request

  const gameId = request.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
  return response.json(ads.map(ad => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(',')
    }
  }));
})

app.get('/ads/:id/discord', async (request, response) => {
  const adId = request.params.id;

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    }
  })
  return response.json({
    discord: ad.discord,
  })
})

app.listen(3333, () => console.log("servidor rodando..."));