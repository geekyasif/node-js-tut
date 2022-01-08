const request = require('request')
const fs = require("fs")

let url = "https://media-exp1.licdn.com/dms/image/C4E03AQG65A-OdR-zMg/profile-displayphoto-shrink_400_400/0/1618304170109?e=1630540800&v=beta&t=hW0OXdsNUGBhctiozTWGCGNxVSNkXefjsOd09ybM2no"

request(url).pipe(fs.createWriteStream('doodle2.png'))