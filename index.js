let express = require('express');
let app = express();

// set server port

app.listen(3000, () => {
    console.log('app is listening at localhost: 3000');
})

// route 1

app.use('/', express.static('public'));

