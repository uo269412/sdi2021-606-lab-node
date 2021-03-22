module.exports = function(app, swig) {
    app.get("/autores", function(req, res) {

        let autores = [ {
                "nombre": "John Lenon",
                "grupo": "Beatles",
                "rol": "Cantante"
            }, {
                "nombre": "John Peter Harrison",
                "grupo": "Metallica",
                "rol": "Batería"
            }, {
                "nombre": "Madonna",
                "grupo": "Sin grupo",
                "rol": "Cantante"
            } ];

        let respuesta = swig.renderFile('views/autores.html', {
            vendedor: 'Tienda de canciones',
            autores: autores
        });


        res.send(respuesta);
    });

    app.get('/autores/agregar', function (req, res) {
        let respuesta = swig.renderFile('views/autores-agregar.html', {

        });
        res.send(respuesta);
    })

    app.post('/autor', function(req, res) {
        let respuesta = ""
        if (Object.keys(req.body.nombre).length === 0) {
            respuesta +="Nombre no enviado en la petición" + "<br>";
        } else {
            respuesta +="Autor agregado: " + req.body.nombre + "<br>";
        }
        if (Object.keys(req.body.grupo).length === 0) {
            respuesta +="Grupo no enviado en la petición" + "<br>";
        } else {
            respuesta +="Grupo agregado: " + req.body.grupo + "<br>";
        }
        if (Object.keys(req.body.rol).length === 0) {
            respuesta +="Rol no enviado en la petición" + "<br>";
        } else {
            respuesta +=" Rol agregado: " + req.body.rol + "<br>";
        }
        res.send(respuesta);
    });

    app.get('/autores', function(req, res) {
        let respuesta = ""
        if (Object.keys(req.body.nombre).length === 0) {
            respuesta +="Nombre no enviado en la petición" + "<br>";
        } else {
            respuesta +="Autor agregado: " + req.body.nombre + "<br>";
        }
        if (Object.keys(req.body.grupo).length === 0) {
            respuesta +="Grupo no enviado en la petición" + "<br>";
        } else {
            respuesta +="Grupo agregado: " + req.body.grupo + "<br>";
        }
        if (Object.keys(req.body.rol).length === 0) {
            respuesta +="Rol no enviado en la petición" + "<br>";
        } else {
            respuesta +=" Rol agregado: " + req.body.rol + "<br>";
        }
        res.send(respuesta);
    });

    app.get('/autores*', function(req, res) {
   //     let respuesta;
   //     if (typeof req.query.nombre != 'undefined')
   //         respuesta.add(req.body.nombre);
   //     if (typeof req.query.grupo != 'undefined')
   //         respuesta.add(req.body.grupo);
   //     if (typeof req.query.rol != 'undefined')
   //         respuesta.add(req.body.grupo);
        res.redirect('/autores');
    });
};