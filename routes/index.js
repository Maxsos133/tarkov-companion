const express = require(`express`)
const Router = express.Router()
const passport = require(`passport`)


Router.get(`/`, function(req, res, next) {
    res.redirect(`https://tarkov-test.vercel.app/index.html`)
})

Router.get(`/auth/google`, passport.authenticate(
    `google`,
    {
        scope: [`profile`, `email`],
        prompt: `select_account`
    }
))

Router.get(`/oauth2callback`, passport.authenticate(
    `google`,
    {
        successRedirect: `https://tarkov-test.vercel.app/index.html`,
        failureRedirect:`https://tarkov-test.vercel.app/index.html`
    }
))

Router.get(`/logout`, function(req, res) {
    req.logout(function() {
        res.redirect(`https://tarkov-test.vercel.app/index.html`)
    })
})



  

module.exports = Router