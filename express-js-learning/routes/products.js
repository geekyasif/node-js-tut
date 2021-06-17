const router = require('express').Router()
let products = require('../productData');

router.get('/products', (req, res) => {
    res.render('products', {
        title : 'Products',
        active_nav : 'active'
    })
})



// api routes for fetching data 
router.get('/api/products', (req, res) => {
    res.json(products)
})



router.post('/api/products', (req, res) => {
    const {name, price}  = req.body

    console.log(req.body)

    if (!name || !price) {
        return res.status(422).json({error: "All fields are required !"})
    }

    const product = {
        // name: name,
        // price: price

        //if both the key and value are same
        id: new Date().getTime().toString(),
        name,
        price
    }

    products.push(product)

    res.json(product)
})


// delete route 
router.delete('api/products/delete/:id', (req, res) => {

    products = products.filter((product) => req.params.id !== product.id)

    res.json({status : "Ok"})

})

module.exports = router