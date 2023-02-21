const nodemailer = require('nodemailer')
const {google} = require('googleapis')
const OAuth2 = google.auth.OAuth2

const myOAuth2Client = new OAuth2(
    "278032471685-iu5u65vjaf51bnnu704u3t69gcl3s1e3.apps.googleusercontent.com",
    "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",
    "https://developers.google.com/oauthplayground"
    );

    myOAuth2Client.setCredentials({
        refresh_token:"1//04U5ro7lTCxFiCgYIARAAGAQSNwF-L9IroSCfC5CzuCxuYHSH5S7K2XWKulZZocAxPOEgkxXO09PffsTdJKtqD4ylVSy4kh4-oFM"
        });

        exports.transport = async () =>{
            const accessToken = await myOAuth2Client.getAccessToken()
            return nodemailer.createTransport({
                service: "gmail",
                auth: {
                     type: "OAuth2",
                     user: "ilham.danu13.id@gmail.com", //your gmail account you used to set the project up in google cloud console"
                     clientId: "278032471685-iu5u65vjaf51bnnu704u3t69gcl3s1e3.apps.googleusercontent.com",
                     clientSecret: "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",
                     refreshToken: "1//04U5ro7lTCxFiCgYIARAAGAQSNwF-L9IroSCfC5CzuCxuYHSH5S7K2XWKulZZocAxPOEgkxXO09PffsTdJKtqD4ylVSy4kh4-oFM",
                     accessToken: accessToken.token //access token variable we defined earlier
                }});
        }

            exports.mailOptions = (sendTo, code) => {
                return{
                from: 'ilham.danu13.id@gmail.com', // sender
                to: sendTo, // receiver
                subject: 'Reset Password', // Subject
                html: `<p>Here is your reset code: <b>${code}</b></p>`// html body
                }
                }