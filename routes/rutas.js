const express         = require('express')
const router          = express.Router()
const controllers     = require('../controllers/mangakas')

router.route('/mangakas')
	  .post(controllers.insertarMangakas)
	  .get(controllers.listarMangakas)
	  

module.exports = router
