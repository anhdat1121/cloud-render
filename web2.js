const http = require('http');
const fs = require('fs');
const port = 3003
const server = http.createServer((req, res)=>{
    if (req.url ==='/'){
fs.readFile('index.html', (err, data)=>{
    if(err) console.error(err)
    else{
        res.write(data)
        res.end()
    }
})
    }else if (req.url ==='/hello'){
        fs.readFile('hello.html', (err, data)=>{
            if(err) console.error(err)
            else{
                res.write(data)
                res.end()
            }
        })
    }
    else if (req.url ==='/welcome'){
        fs.readFile('welcome.html', (err, data)=>{
            if(err) console.error(err)
            else{
                res.write(data)
                res.end()
            }
        })
    }
    else {
        res.write('404-Page Not Found')
        res.end()
    }
})
server.listen(port, ()=>{
    console.log('http://localhost:' + port)
})
