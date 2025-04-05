const express = require('express');
const app = express();
const port = 3000;

// การตั้งค่าการให้ Express ใช้งาน Static files (เช่น CSS)
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello Docker</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f0f8ff;
                text-align: center;
                padding: 50px;
            }
            h1 {
                color: #333;
                font-size: 3em;
                margin-bottom: 20px;
            }
            p {
                color: #666;
                font-size: 1.2em;
            }
            .container {
                background-color: #fff;
                border-radius: 8px;
                padding: 20px;
                box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                max-width: 600px;
                margin: 0 auto;
            }
            .docker-logo {
                max-width: 200px;
                margin-top: 20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Phraewphan1650702895</h1>
        </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
