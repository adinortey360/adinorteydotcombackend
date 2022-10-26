const express = require('express')
var nodemailer = require('nodemailer');
const app = express()
const port = 3000

//Environment variables for smtp mail credentials
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;


app.get('/', (req, res) => {
  res.send('Home')
})

//receive the data from contact form and send it to the email
app.post('/contact', (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: user,
            pass: pass
        }
    });
    
    var mailOptions = {
        from: 'test@gmail.com',
        to: 'hello@adinortey.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
        } else {
        console.log('Email sent: ' + info.response);
        }
    });
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

// Export the Express API
module.exports = app;