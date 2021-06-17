function apiKey (req, res, next) {

   const api_key = '123456';
   const public_api_key = req.query.api_key
   
   if (public_api_key && public_api_key === api_key){

    next()
        

   }else{

    res.json({ message : "Not Allowed !"})

   }

  


}

module.exports = apiKey