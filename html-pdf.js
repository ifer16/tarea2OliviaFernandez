//-------------------------------------------Inicio
const pdf = require('html-pdf');

//-----------------------------------------------------------------------------------
let contenido = `
<div id="pageHeader" style="border-bottom: 1px solid #ddd; padding-bottom: 5px;">
  <img src="http://desarrolloweb.com/images/logodwgris.png" width="150" height="27" align="left">
  <p style="color: #666; margin: 0; padding-top: 12px; padding-bottom: 5px; text-align: right; font-family: sans-serif; font-size: .85em">
    Publicar en Internet
  </p>
</div>
<div id="pageFooter" style="border-top: 1px solid #ddd; padding-top: 5px;">
  <p style="color: #666; width: 70%; margin: 0; padding-bottom: 5px; text-align: let; font-family: sans-serif; font-size: .65em; float: left;">http://desarrolloweb.com/manuales/publicar-webs-internet.html</p>
  <p style="color: #666; margin: 0; padding-bottom: 5px; text-align: right; font-family: sans-serif; font-size: .65em">Página {{page}} de {{pages}}</p>
</div>

<h1>Esto es un test de html-pdf</h1>
<p>Estoy generando PDF a partir de este código HTML sencillo</p>
`;
//-----------------------------------------------------------------------------------

pdf.create(contenido).toFile('./salida.pdf', function(err, res) {
    let options = {

        //--------------------------------------------------
        "format": 'A4',
        "header": {

            "height": "60px"
        },
        "footer": {
            "height": "22mm"
        },
        "base": 'file://Users/midesweb/carpeta_base/'
    };
    //--------------------------------------------------

    if (err) {
        console.log(err);
    } else {
        console.log(res);
    }
});
//------------------------------------------------Fin