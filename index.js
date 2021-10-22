const express = require('express');

const app = express();

app.get('/', function (req, res){
    const photo = {
        id: 1,
        name: "Photo Name",
        description: "Photo description"
      }
      res.send(photo)
    
})

const port = 3000
app.listen(port, ()=>{
    console.log('Sunucu baslatildi. ')
})
