const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('')
const msg = {
  to: 'kevincristopher75@gmail.com', // Change to your recipient
  from: 'ecuaskins75@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Kevin Miranda.js</strong>',
}
const returnDataEmail = () => {
    sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
}
returnDataEmail();
