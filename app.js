var express = require('express');
const nodemailer = require('nodemailer');

var app = express();
app.use(express.json()); //convert req to json
app.use(express.static(__dirname + '/app'));
app.post('/sendmail', function(req, res){
  console.log('post req', req.body);
  
  
  // nodemailer.createTestAccount((err, account) => {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        sendmail: true
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: req.body.from, // sender address
        to: req.body.to, // list of receivers
        subject: req.body.subject, // Subject line   
        text: JSON.stringify(req.body.text), // plain text body
        html: '<b>Hello ITN?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
// });
  
  res.end();
});







app.listen(process.env.PORT || 3000);



