const mimeDb = require('mime-db')
const fs = require('fs')

/**
 * Guardamos archivos multimedia que nuestro cliente nos envie!
 * @param {*} media 
 */

 const saveMedia = (media) => {
    const extensionProcess = mimeDb[media.mimetype]
    //console.log('** tipo de media **'+ media.mimetype);
    // este if soluciona el problema de la recepcion del audio que sacaba error ahora lo ignora
    if(media.mimetype == "audio/ogg; codecs=opus"){
        console.log('audio recibido');
    }else{
    const ext = extensionProcess.extensions[0]
    fs.writeFile(`./media/${Date.now()}.${ext}`, media.data, { encoding: 'base64' }, function (err) {
        console.log('** Archivo Media Guardado **'+ media.mimetype);
    });
    }
}

module.exports = {saveMedia}