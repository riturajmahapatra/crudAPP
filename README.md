Prerequisites: Node.js 16.x+ (https://nodejs.org/en/)

Setup (VS Code):

Clone repo (if using Git).
Open terminal (Ctrl+Shift+G).
cd your-project-name.
Install deps: npm install or yarn install.
Configuration:

Create MongoDB Atlas account (https://www.mongodb.com/).
Create cluster & database.
Add .env file (root dir):
MONGODB_URI=...
MONGODB_USERNAME=...
MONGODB_PASSWORD=...
Important: Don't commit .env - add to .gitignore if exists.
Running (VS Code):

Server: cd server; npm start or yarn start.
Client (if applicable): cd client; npm start or yarn start.
