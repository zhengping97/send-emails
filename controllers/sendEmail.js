const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail')

const sendEmailEthereal = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'kyle.waelchi29@ethereal.email',
            pass: 'fSTq9C9uQNe13ybgqf'
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Zheng Ping" <hengzhengping@gmail.com>', // sender address
        to: "bar@example.com", // list of receivers
        subject: "Hello", // Subject line
        html: "<h2>Sending Emails with Node.js</h2>", // html body
    });

    res.json(info);
};

const sendEmail = async (req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'heng0235@e.ntu.edu.sg', // Change to your recipient
        from: 'hengzhengping@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    const info = await sgMail.send(msg);
    res.json(info);
}

module.exports = sendEmail;