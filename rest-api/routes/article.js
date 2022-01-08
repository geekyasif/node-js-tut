const router  = require('express').Router()
const Article = require('../models/article.model')


// getting all the articles 
router.get('/', (req, res) => {

    Article.find()
    .then(articles => res.json(articles))
    .catch(err => res.status(400).json("err" , err))

})



// post request to add articles 
router.post('/',  (req, res) => {
    const title = req.body.title
    const description = req.body.description
    console.log(title, description)
    const newArticle = new Article({
        title : title,
        description: description
    })

    newArticle.save()
    .then( () => res.json(newArticle))
    .catch(err => res.status(400).json("Can't Add data due to ", err))
  

})


router.delete('/:id', (req, res) => {
    Article.findByIdAndDelete(req.params.id)
    .then( () => res.json({"message" : "deleted successfully"}))
    .catch( () => res.status(400).send())
})


router.patch("/:id", async (req, res) => {


    try {
		const article = await Article.findById(req.params.id)
     
		if (req.body.title) {
          
			article.title = req.body.title
		}

		if (req.body.description) {
			article.description = req.body.description
		}

		await article.save()
		res.send(article)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}


})

module.exports = router