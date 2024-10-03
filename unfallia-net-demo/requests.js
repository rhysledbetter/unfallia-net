const http = require('http')
const data = JSON.stringify({
    title : 'Unfallia MEAN stack'
})

const options = {
    hostname : 'localhost',
    port : 3000,
    path : '/',
    method : 'Pocchi', // PUT, DELETE, POST
    header : {
        'Content-type' : 'application/json',
        'Content-length' : data.length
    }
}

const request = http.request(options,response => {
    response.on('data', chunk => {
        process.stdout.write(chunk);
    })
})

request.on('error', error => {
    console.error(error);
})

request.end();