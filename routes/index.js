const express = require(`express`)
const Router = express.Router()
const passport = require(`passport`)


Router.get(`/`, function(req, res, next) {
    res.redirect(`/quests`)
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
        successRedirect: `/quests`,
        failureRedirect:`/quests`
    }
))

Router.get(`/logout`, function(req, res) {
    req.logout(function() {
        res.redirect(`/quests`)
    })
})

module.exports = Router