const PORT = 8001
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()



const url =  'https://www.technocite.be/index.php/fr/nos-formations/nos-formations-qualifiantes'


axios(url)
    .then(response => {
        const html = response.data
        const el = cheerio.load(html)
        const result = []

        el('.StyleNet2', html).each(function(){
           const title = el(this).text()
           const url = el(this).find('a').attr('href')
           result.push({
               title,
               url
           })
        })
        console.log(result)
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log('server running on PORT ' + PORT))
