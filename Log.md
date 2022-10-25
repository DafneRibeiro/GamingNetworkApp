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

Done that the structure for the Database was created and I could start using it.

## 15/10/2022

Using prisma studio I created the games, and copied the banner for each game using Twitch.

Install @prisma/client. And started accessing the database using it.

using prisma studio simulated a create ad, for a game, and using... 

```
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
  ```
... inside server.ts to display the amount of ads for each game listed.

## 17/10/2022

Continued working on the backend, fixed a route error i was having and not being able to show the ads by gameId.

Also worked on showing the discord id once selected.
Learned how to use findUniqueandthrow(), in case it doesn't find what i am looking for it returns an error. 

## 18/10/2022

Started working on some functions to convert time in the folder utils.
Set up for cors, and prepare everything to connect the backend to the frontend.

Had a minor problem because one of the functions wasn't working, after closing the server down and vscode, it worked again

Connected the frontend with my Backend, as Twitch API was getting really complicated to access, i used my own API of games i created, and used fetch and map in my component to display the games.

created a few components for the frontend

## 21/10/2022

Tried to fix why my games don't display filling the whole space, spent a lot of time and hit a dead end, re-did the code, and couldn't figure it out. This happened after I mapped it.
Didn't have much time to work on the project today.

## 22/10/2020

Again tried to fix the problem, still no solution, will look further into it, and move foward for now, as how it looks right now doesn't affect the whole project, only how it displays, more like a styling problem.

To finish the front end, started working on a modal for when I click my button it will pop-up on the screen.

Installed RADIX that supports modals but accessible and without styling so I can style as I wish.

Using this documentation for the installation and use:

https://www.radix-ui.com/docs/primitives/components/dialog

To centralize it on my screen using tailwind I learning the following hacks:

top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 (inside className)

styled it using tailwind, and I just need to go back and make the day button work and Create Ad button send information to my API.

## 24/10/2022

Linked the Mobile with my backend using my ip address using useEffect and useState, passed the interface and now my mobile app display all games and ads.

Installed the library react navigation and dependencies from:
https://reactnavigation.org/docs/getting-started/

## 25/10/2022 

Progress with Mobile, displayed the cards for the ads when you click on a game. Used methods to go back on the previous page, styled it better, and fixed a bit the bits that I had an error on yesterday.

Left only a little to finish the mobile part.


