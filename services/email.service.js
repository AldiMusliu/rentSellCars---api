const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

const forgotPasswordTemplate = (token) => {
  const  url = `${process.env.FRONT_URL}/reset-password?token=${token}`;
  return {
    subject: 'Automative Online Supermarket (Forgot Password)',
    text: `Seems like you forgot your password for Automative Online Supermarket app. if this is true, click on the link below to reset your password \n ${url}`,
    html: `
      <h1>Password Reset</h1>
      <p>Seems like you forgot your password for Automative Online Supermarket app. if this is true, click on the link below to reset your password</p>
      <a href="${url}">Reset Password</a>`
  }
}

const verifyUserTemplate = (token) => {
  const  url = `${process.env.FRONT_URL}/verify?token=${token}`;
  return {
    subject: 'Automative Online Supermarket app (Verify account)',
    text: `To verify your account click on the link below... \n ${url}`,
    html: `
      <h1>Verify Account</h1>
      <p>To verify your account click on the link below</p>
      <a href="${url}">Verify</a>`
  }
}

module.exports = {
  sendForgotPasswordEmail: async (email, token) => {
    console.log('send password func')
    const body = forgotPasswordTemplate(token)

    const info = await transporter.sendMail({
      from: 'Automative Online Supermarket <support@rentSellCars.com>',
      to:  email,
      subject: body.subject,
      text: body.text,
      html: body.html,
    })
    return info.response
  },

  sendRegistrationEmail: (email, token)  => {
    const body = verifyUserTemplate(token)
    transporter.sendMail({
      from: 'Automative Online Supermarket <support@rentSellCars.com>',
      to:  email,
      subject: body.subject,
      text: body.text,
      html: body.html,
    })
  }
}


