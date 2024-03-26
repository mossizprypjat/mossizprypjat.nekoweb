const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');

app.use(cors());

app.get('/api', function (req, res) {
    if (req.url === '/favicon.ico') {
        res.end();
    }

    const json = fs.readFileSync('count.json', 'utf-8');
    const obj = JSON.parse(json);
    obj.pageviews = obj.pageviews + 1;
    if (req.query.type === 'visit-pageview') {
        obj.visits = obj.visits + 1;
    }

    const newJSON = JSON.stringify(obj);
    fs.writeFileSync('count.json', newJSON);

    res.send(newJSON);
})

const port = 3000
app.listen(port, () => {
    console.log(`server running on port ${port}`)
})