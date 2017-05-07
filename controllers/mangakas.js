const firebase = require('firebase')

firebase.initializeApp({
	serviceAccount: "./mangas-0e34a00781e8.json",
	databaseURL: "https://mangas-9325b.firebaseio.com"
})

const db = firebase.database()

exports.insertarMangakas = (req, res) => {

		let nombreMangaka = req.body.nombre

		/*let refMangakas = db.ref('mangakas').push()

			refMangakas.set({

				nombre : nombreMangaka

			})*/

		let refMangakas = db.ref().child('mangakas')

			refMangakas.push({

				nombre : nombreMangaka

			})

		res.json({mensaje: 'insertarMangaka'})
		
}