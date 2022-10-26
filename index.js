const express = require('express')
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(express.urlencoded());

//Environment variables for smtp mail credentials
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;


app.get('/', (req, res) => {
  res.send('Home')
})

//receive the data from contact form and send it to the email
app.post('/contact', (req, res) => {
    //contact form data
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: user,
            pass: pass
        }
    });
    
    var mailOptions = {
        from: email,
        to: 'hello@adinortey.com',
        subject: 'New message from ' + name + ' via adinortey.com',
        text: 'Name: ' + name + ' <br />Email: ' + email + ' <br />Subject: ' + subject + ' <br />Message: ' + message
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
            //send response
            res.send('error');
        } else {
            //send reponse 
            res.send('success');
        }
    });
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

// Export the Express API
module.exports = app;