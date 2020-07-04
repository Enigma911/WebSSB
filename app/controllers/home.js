//funcion que le pasaremos un server como parametro 
var homeController = function (server) {
//Validar
	console.log('homeController listo');

	server.route('/')
		.get(function (req , res){
			res.render('index');
		});

			//server.route('/')
		//.post(function (req , res));
};
module.exports = homeController;