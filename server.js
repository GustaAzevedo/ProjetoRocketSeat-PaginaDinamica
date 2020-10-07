const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")
const { query } = require('express')

server.use(express.static('public'))

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})


server.get("/", function (req, res) {
    const about = {
        avatar_url: "https://scontent.fcgh35-1.fna.fbcdn.net/v/t1.0-0/s526x395/117390170_2997848950342777_5049611185613482224_o.jpg?_nc_cat=110&_nc_sid=174925&_nc_eui2=AeFvGHsNn9cbzox5DfjYC04oo3EgWEgB3q2jcSBYSAHeraoIUPB1RazIZfWAMIsR2kHQtuMs3sgFMD4i7FwAYszp&_nc_ohc=UEfv-tHw7VAAX_KUBOu&_nc_ht=scontent.fcgh35-1.fna&tp=7&oh=ce88178dd06276993d81ba697c9d4610&oe=5F7B94A9",
        name: "Gustavo azevedo",
        role: "Desenvolvedor Júnior",
        description: "Deselvolvedor Full-stack com conhecimento nas linguagens: JavaScript, PHP e Python.",
        links: [
            {
                url: "https://bitbucket.org/GustaAzevedo/",
                name: "Bitbucket"
            },
            {
                url: "https://www.linkedin.com/in/gustavo-azevedo-6384821b6/",
                name: "Linkedin"
            },
            {
                url: "https://www.instagram.com/gusta.azevdo/",
                name: "Instagram"
            },
        ]
    }


    return res.render("about", { about })
})

server.get("/portfolio", function (req, res) {
    return res.render("portfolio", { items: videos })
})

server.get("/video", function (req, res) {
    const id = req.query.id

    const video = videos.find(function (video) {
        if (video.id == id) {
            return true
        }
    })

    if (!video) {
        return res.send("Videos not found")
    }

    return res.render("video", { item: video })
})

server.listen(5000, function () {
    console.log("server is running")
})