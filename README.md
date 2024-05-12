<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project Name - README</title>
</head>
<body style="font-family: sans-serif; margin: 0; padding: 20px;">
  <h1 style="text-align: center; font-size: 2em;">Project Name</h1>
  <p>[Short description]</p>

  **Prerequisites:**

  <ul>
    <li>Node.js 16.x+ (<a href="https://nodejs.org/en/">https://nodejs.org/en/</a>)</li>
  </ul>

  **Setup (VS Code):**

  <ol>
    <li>Clone repo (if using Git).</li>
    <li>Open terminal (Ctrl+Shift+G).</li>
    <li><code>cd your-project-name</code>.</li>
    <li>Install deps: <code>npm install</code> or <code>yarn install</code>.</li>
  </ol>

  **Configuration:**

  <ol>
    <li>
      Create MongoDB Atlas account (<a href="https://www.mongodb.com/basics/create-database">https://www.mongodb.com/basics/create-database</a>).
    </li>
    <li>Create cluster & database.</li>
    <li>
      Add `.env` file (root dir):
      <pre style="background-color: #eee; padding: 10px;">MONGODB_URI=...
MONGODB_USERNAME=...
MONGODB_PASSWORD=...
      </pre>
      **Important:** Don't commit `.env`!
    </li>
  </ol>

  **Running (VS Code):**

  <ol>
    <li>Server: `cd server; npm start` or `yarn start`.</li>
    <li>Client (if applicable): `cd client; npm start` or `yarn start`.</li>
  </ol>

  **Usage:**

  <p>[Brief instructions]</p>

  **License:** [License name]

  <div class="contact" style="text-align: center; margin-top: 20px;">
    <span> How to reach me:</span> <a href="mailto:riturajmahapatra@gmail.com">riturajmahapatra@gmail.com</a>
  </div>

  <div class="icons" style="text-align: center; margin-top: 20px;">
    <i class="far fa-handshake" style="font-size: 1.5em; margin-right: 10px; color: #ccc;"></i> I'm looking to collaborate on big projects
    <br>
    <i class="fas fa-question" style="font-size: 1.5em; margin-right: 10px; color: #ccc;"></i> I'm looking for help with finding new opportunities
    <br>
    <i class="fas fa-comment" style="font-size: 1.5em; margin-right: 10px; color: #ccc;"></i> Ask me about my journey, it's interesting
  </div>
</body>
</html>
