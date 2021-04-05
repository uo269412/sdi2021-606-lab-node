module.exports = function(app, swig, gestorBD) {
    app.post('/comentarios/:cancion_id', function(req, res) {
        var comentario = {
            texto : req.body.texto,
            cancion_id : gestorBD.mongo.ObjectID(req.params.cancion_id),
            autor: req.session.usuario
        }
        // Conectarse
        gestorBD.insertarComentario(comentario, function(id){
            if (id == null) {
                res.send("Error al insertar comentario");
            } else {
                res.redirect("/cancion/" + req.params.cancion_id);
            }
        });
    });

    app.get('/comentario/borrar/:id', function (req, res) {
        let criterio = {"_id" : gestorBD.mongo.ObjectID(req.params.id) };
        gestorBD.eliminarComentario(criterio,function(comentarios){
            if ( comentarios == null ){
                res.send(respuesta);
            } else {
                res.redirect("/tienda");
            }
        });
    })

};