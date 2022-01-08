const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3000;


const app = http.createServer((req, res) => {

    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (!err) {
    //             res.end(content);
    //         }
    //     })

    // } else if (req.url === '/blog') {
    //     fs.readFile(path.join(__dirname, 'public', 'blog.html'), (err, content) => {
    //         if (!err) {
    //             res.end(content);
    //         }
    //     })
    // } else if (req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if (!err) {
    //             res.end(content);
    //         }
    //     })
    // }




    // getting the file path of the public folder
    var filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);



    // sending content type to browser to understand the type of data 
    const content = { "contentType": "text/html" };



    // setting .html extension
    const ext = path.extname(filePath)
    if (!ext) {
        filePath += '.html';
    }


    // changing file file according to the file extention
    switch (ext) {
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/javascript'
            break
        default:
            contentType = 'text/html'
    }



    // reading the html file and sending to the browser
    fs.readFile(filePath, (err, data) => {

        // if page not found showing 404 page
        if (err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, errorMsg) => {

                // server error
                if (err) {
                    res.writeHead(500, content);
                    res.end(err)

                }
                // page not found
                else {
                    res.writeHead(404, content);
                    res.end(errorMsg);
                }
            })

        }
        // sending data to the client or browser with 200 status code 
        else {
            res.writeHead(200, content)
            console.log(data)
            res.end(data);
        }
    })
});


app.listen(PORT, (err) => {
    if (err) {
        console.log("Error while starting server");
        return
    } else {
        console.log("Server is listening on port 3000");
    }
})

