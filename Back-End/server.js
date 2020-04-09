const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const videos = require('./data')

server.use(express.static('public'))

server.set("view engine", 'njk')

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", (req, res) => {
    const about = {
        avatar_url: 'https://avatars2.githubusercontent.com/u/62634500?s=400&u=36d623c6f6304e4c1ee709c5be3b1f5b7b03af1b&v=4',
        name: 'Daniel Santiago',
        role: 'Estudante - UFAM',
        description: 'Estudante de programação web focado em React, Node e React Native. Cursando Engenharia da Computação no 3º Período na <a href="https://www.ufam.edu.br/">UFAM</a>.',
        links: [
            {name: "Github", url: "https://github.com/DaniSanT17"},
            {name: "Instagram", url: "https://www.instagram.com/dani.sant1/?hl=pt-br"},
            {name: "Linkedin", url: "https://www.linkedin.com/in/daniel-santiago-08488a50/"}
        ]
    }

    return res.render("about", {about});
})

server.get("/portfolio", (req, res) => {

    return res.render("portfolio", {items: videos});
})

server.get("/video", (req, res)=>{
    const id = req.query.id;

    const video = videos.find(function(video){
       return (video.id == id)
    })

    if(!video){
        return res.send("Video not found!")
    }

     return res.render("video", {item: video})
})


server.listen(5000, ()=>{
    console.log('server is running')
})