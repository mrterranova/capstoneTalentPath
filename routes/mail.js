const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


const auth = {
    auth: {
        api_key: '',
        domain: ''
    }
}

const transporter = nodemailer.createTransport(mailGun(auth));

var sendMail = (email, text, cb) => {
    const mailOptions = {
        from: "noreply@FNS.com",
        to: email,
        subject: 'Thank you for Donating to Farmer Nationwide Services',
        text: text
    }   

transporter.sendMail(mailOptions, function (err, data) {
    if (err) { cb(err, null); }
    else { cb(null, data); }
})
}
