const router = require('express').Router()
const path = require('path')
const apiKeyMiddleware = require('../middlewares/apiKey')


// global level router middleware
// router.use(apiKeyMiddleware)

router.get('/', (req, res) => {

       // res.send("Send is use to send the text into the brower")

       res.render('index', {
        title: "home",
        active_nav: 'active'
    })
})

router.get('/about', (req, res) => {

    res.render('about', {
        title: "About",
        active_nav: 'active'
    })

})



router.get('/download', (req, res) => {
    res.download(path.resolve(__dirname) + '/about.js')
})





router.get('/contact', (req, res) => {

    
    res.render('contact', {
        title: "Contact",
        active_nav: 'active'
    })

    

})


// single router level middleware

// router.get('/api/items',  apiKeyMiddleware, (req, res) => {
//     res.json([
//         {
//             id: 1,
//             name: "laptop"
//         },
//         {
//             id: 2,
//             name: "Desktop"
//         },

//         {
//             id: 1,
//             name: "Mobile"
//         },
//     ])
// })




// single router level arrays of middleware

// router.get('/api/items',[  apiKeyMiddleware, anotherMiddleware ] (req, res) => {
//     res.json([
//         {
//             id: 1,
//             name: "laptop"
//         },
//         {
//             id: 2,
//             name: "Desktop"
//         },

//         {
//             id: 1,
//             name: "Mobile"
//         },
//     ])
// })






// router.get('/api/items', (req, res) => {
//     res.json([
//         {
//             id: 1,
//             name: "laptop"
//         },
//         {
//             id: 2,
//             name: "Desktop"
//         },

//         {
//             id: 1,
//             name: "Mobile"
//         },
//     ])
// })


module.exports = router