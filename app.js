const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send('Hello, World this is my first zoom trial');
});

const port = 3000;
app.listen(port, () => {
console.log(`Server running on port ${port}`);
});
