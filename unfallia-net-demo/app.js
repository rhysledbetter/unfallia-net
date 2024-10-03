//const http = require('http');
const express = require('express');
const fs = require('fs');
const dir = './public/';
const port = process.env.PORT | 3000;


const app = express();

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})

app.get('/', (request,response)=> {
    render(response,'index.html');
})

app.get('/about', (request,response)=> {
    render(response,'about.html');
})
app.get('/contact', (request,response)=> {
    render(response,'contact.html');
})

const render = (response,file) => {
    fs.readFile(dir+file, (err, data) => {
        if(err) {
            response.writeHead(404, {'Content-type' : 'text/html'});
            response.end('<h1>404 File Not Found</h1>')
        }
        response.writeHead(200, {'Content-type' : 'text/html'});
        return response.end(data);
    });
}

/*const server = http.createServer( (request,response) => {
    //response.writeHead(200, {'Content-type':'text/html'});

    if(request.url === '/') {
        render(response,'index.html');
    }else if (request.url === '/about') {
        render(response,'about.html');
    }else if (request.url === '/contact') {
        render(response,'contact.html');
    }else {
        response.writeHead(404, {'Content-type' : 'text/html'});
        response.end('<h1>404 File Not Found</h1>')
    }

    

    if(request.url === '/get') {
        response.write('You reached the GET page.');
        if(request.method === 'GET') {
            response.end('GET');
        }
    }else if (request.url === '/post') {
        response.write('You reached the POST page.');
        if(request.method === 'POST') {
            response.end('POST');
        }
    }else if (request.url === '/put') {
        response.write('You reached the PUT page.');
        if(request.method === 'PUT') {
            response.end('PUT');
        }
    }else if (request.url === '/delete') {
        response.write('You reached the DELETE page.');
        if(request.method === 'DELETE') {
            response.end('DELETE');
        }
    } else {
        response.end('Error :c');
    }
    response.end();
    
    
});

server.listen(port,()=>console.log(`http://localhost:${port}`));*/



