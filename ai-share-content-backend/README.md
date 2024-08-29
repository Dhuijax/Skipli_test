## README

[SKIPLI_TEST]

## Overview

In the package project includes subfolders:
ai-share-content-backend
┣ 📂
┃ ┣ 📂controllers						
┃ ┃ ┗ 📜 createCaptionsFromIdeas.js		(Api createCaptionsFromIdeas)
┃ ┃ ┃ 📜 createNewAccessCode.js			(Api createNewAccessCode using twilio)
┃ ┃ ┃ 📜 generatePostCaptions.js			(Api generatePostCaptions using gemini)
┃ ┃ ┃ 📜 getPostIdeas.js					(Api getPostIdeas using gemini)
┃ ┃ ┃ 📜 getUserGeneratedContents.js		(Api getUserGeneratedContents)
┃ ┃ ┃ 📜 login.js							(Api login)
┃ ┃ ┃ 📜 saveGeneratedContent.js			(Api saveGeneratedContent)
┃ ┃ ┃ 📜 unsaveContent.js					(Api unsaveContent)
┃ ┃ ┃ 📜 validateAccessCode.js			(Api validateAccessCode using twilio)
┃ ┣ 📂models								
┃ ┃ ┗ 📜 user.js							(model user)
┃ ┣ 📂module								
┃ ┃ ┗ 📜 config.js						(assign variable from .env and export them for using)
┃ ┣ 📂routes								
┃ ┃ ┗ 📜 api.js							(Define api)
┃ ┣ 📂utils								
┃ ┃ ┗ 📜 generateRandomCode.js 			(Generate code not using API)
┣ 📜server.js 							(Config front-end url line 15)
┣ 📜package.js 							(package and script run)
┣ 📜.env 								(enviroment config)
┣ 📜README.md   							(Information about project)

## Installing

1. Change mongoDB url: mongodb+srv://username:password@host/databasename
2. Change gemini api key
3. change account sid, auth token, service id of twilio
4. Nodejs version 22.7.0, npm version 10.8.2
5. Open cmd at folder includes project Run: "cd ai-share-content-backend" => "npm install" => "node server.js"
