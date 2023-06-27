const express = require(`express`)
const Router = express.Router()
const passport = require(`passport`)


Router.get(`/`, function(req, res, next) {
    res.redirect(`/index.html`)
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
        successRedirect: `/index.html`,
        failureRedirect:`/auth/google`
    }
))

Router.get(`/logout`, function(req, res) {
    req.logout(function() {
        res.redirect(`/index.html`)
    })
})



  

module.exports = Router