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
                res.send("Agregada id: "+ id);
            }
        });
    });

};