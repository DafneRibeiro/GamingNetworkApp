## 10/10/2022
Started the project installing all dependencies and creating the base of Frontend, Backend and Mobile files.

setting up to use TypeScript and organizing files.

Installed and learned a bit on how to use Hoppscotch instead of Postman, did a basic route to start with and moved on to frontend



## 12/10/2022

Started planning the Frontend 
Using Figma to style it better 
For the frontend I used ReactJS and TypeScript and made everything static at this point.

## 13/10/2022

Continued working on the frontend and styled it using Tailwind, was my first contact with Tailwind and I enjoyed it so much, it made it easy to style it.

Started also the Mobile, using ReactNative and it was my first contact with ReactNative.
Set up using my phone until I find a better emulator for windows as I wasn't sure what was best.

Learned a lot in this day about ReactNative and how it works and finished the splash page and initial page with everything static. 



## 14/10/2022
Worked on the Backend of my project:

Started working on my routes, I create routes for /games /ads and used Hoppscotch for my requests

after that I learned a bit about Prisma and how to work with the extention SQLite on Vs Code and started creating the Models after Identifying all the things I need in the planning:
Identifying also some possible requirements/user stories.

Backend (planning)

## Game

id 
title
bannerUrl

## Ad

id
gameId
name
yearsPlaying
discord
weekDays
hourStart
hourEnd
useVoiceChannel
createdAt

## User stories
```
* Be able to see a list of games with the count of ads on it
* Be able to create an ad to find a duo
* List of ads for each game
* Search discord via ads id
* Only show discord tag once you click connect
```

I used prisma and create tables on schema.prisma. 

Done that the structure for the Database was created and I could start using it