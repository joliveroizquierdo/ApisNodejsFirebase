const firebase = require('firebase')

	  firebase.initializeApp({
			serviceAccount: "./mangas-0e34a00781e8.json",
			databaseURL: "https://mangas-9325b.firebaseio.com"
	  })

const refMangakas = firebase.database().ref().child('mangakas')

exports.insertarMangakas = (req, res) => {

		let nombreMangaka = req.body.nombre

			refMangakas.push({

				nombre : nombreMangaka

			})

			refMangakas.on('child_added', (snap) => {
			
				console.log(snap.val())

				let datos = snap.val()

				console.log(datos)

				res.json({datos})

			})
		
}

exports.listarMangakas = (req, res) => {

		console.log('listarMangakas')

}
