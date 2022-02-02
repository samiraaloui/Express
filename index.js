const express = require('express');
const app = express();


// app.use(workingTime=(req , res , next)=>{
//     const hours =new Date().getHours()
//     const days =new Date().getDay()
//     if((days===0)||(days===6)||(hours>=9)||(hours<=17)){
//         res.sendFile(__dirname+'/views/home.html')
//     }
//     else{
//         next()
//     }
// })

app.use(express.static('views'))
// app.use('*/contact',express.static('views/contact.html'))
// app.use('*/service',express.static( 'views/service.html'))


const PORT = 5000;
app.listen(PORT, () =>{
    console.log(`SERVER STARTED ON PORT ${PORT}`)
})