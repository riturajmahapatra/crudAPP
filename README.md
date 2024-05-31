<body style="font-family: sans-serif; margin: 0; padding: 20px;">
  <h1 style="text-align: center; font-size: 2em;">Crud App</h1>
  <p>A CRUD app is a fundamental web application that allows users to perform Create, Read, Update, and Delete operations on data.</p>

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
      <pre style="background-color: #eee; padding: 10px;">
      PORT=...
      MONGODB_URL=...

      </pre>
      **Important:** Don't commit `.env`!


    </li>

  </ol>

**Running (VS Code):**

  <ol>
    <li>Backend: `cd Backend; npm start`.</li>
    <li>Frontend : `cd Frontend; npm run dev`.</li>
  </ol>

**Running (in Versel):**

  <ul> 
  create a new file in the root of your backend with the name : "vercel.json" and add the following code in that
  <li>
  {
  "version": 2,
  "builds": [{ "src": "./index.js", "use": "@vercel/node" }],
  "routes": [{ "src": "/(.*)", "dest": "/" }]
}
</li>
   </ul>

  <div class="contact" style="text-align: center; margin-top: 20px;">
    <span> How to reach me:</span> <a href="mailto:riturajmahapatra@gmail.com">riturajmahapatra@gmail.com</a>
  </div>

</body>
