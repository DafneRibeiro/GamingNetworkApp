# GamingNetworkApp

NLW eSports By RocketSeat

## Goals of the project

---

* Practice ReactJS
* Learn more about TypeScrypt
* Learn Tailwind
* Create a frontend that works and is responsive
* Have my first contact with ReactNative
* To learn and develop my backend skills and my web design skills

This project is a Lab project developed by RocketSeat with the purpose of studying and practicing your skills with the tutors.

## To run it
---

* `cd` on web folder
* open a terminal and use `npm run dev`
* run this command on server folder too.
* run `npm i` to install all dependencies 

 To run the mobile app:

 * `cd` on mobile folder
 * Run the command `expo start`
 * run `npm i` to install all dependencies 
 * I recommend using the app Expo Go, its easy to set up as you only need to scan the QR code to run the application on your mobile.

 To run prisma studio and check the ads created for each game:

 * open a terminal on server folder
 * run `npx prisma studio` 
 * select Ad and check the ads created when you submit a form in the modal

```Note: for this project I selected 6 games, will look into adding a slide and adding more games for the user to choose from. Would also like to look into how to use Twitch API for developers, as I can get a broader game option.
 
Probably I will use the library keen-slider for it as it is integrated with react.
Will also look into doing validation with the library React Hook Form and use a schema validation for the frontEnd, and probably use zod for the validation on the backend.```


## Tech Stack

* TypeScrypt
* Tailwind
* NodeJs
* ExpressJs
* ReactNative
* Hopscotch
* Figma for the design
* Radix

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

* Be able to see a list of games with the count of ads on it
* Be able to create an ad to find a duo
* List of ads for each game
* Search discord via ads id
* Only show discord tag once you click connect
  