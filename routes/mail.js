const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


const auth = {
    auth: {
        api_key: '373ccb35f63b3b443acee90b86931eb5-7fba8a4e-970b8cef',
        domain: 'sandbox4d68077a441249f5a1266405de3171a7.mailgun.org'
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