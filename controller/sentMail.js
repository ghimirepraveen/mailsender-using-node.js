const nodemailer = require('nodemailer')
const sentMail = async (req, res) => {
    //create smtp server using ethereal 
    let testAccount = await nodemailer.createTestAccount();
    let transporter = await nodemailer.createTransport({

        host: "smtp.ethereal.email",
        port: 587,

        auth: {
            user: 'reyna77@ethereal.email',
            pass: 'ukF4NgavkZQjyCb3bN'
        }
    });
    //this would be the format how the mail will be written 
    let info = await transporter.sendMail({
        from: '"Pravin GHimire" <foo@example.com>',
        to: "ghimireprabin777@gmail.com ", //we can give multiple reciver at a time using commas 
        subject: "Hello sir",
        text: "Hello world? ",
        html: "<b>Hello world?</b>",
    });


    console.log("Message sent:%s", info.messageId);
    res.json(info);//maill is in josn format

};
module.exports = sentMail;