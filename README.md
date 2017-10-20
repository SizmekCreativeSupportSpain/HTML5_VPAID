# <a href="https://platform.mediamind.com"><img src="http://www.sizmek.es/eb/users/javiegido_/__logos/HTML5.png" alt="Sizmek" width="26" height="36" /></a> HTML5 VPAID <a href="https://platform.mediamind.com"><img src="http://www.sizmek.es/eb/users/javiegido_/__logos/logo-dark.png" alt="Sizmek" width="57" height="15" /></a>

Plantilla para crear formatos In-Stream VPAID utilizando workspaces de Sizmek.

## Descripción

Los formatos VPAID son formatos tipo In-Stream ya que se sirven dentro de un reproductor de video que tenga el soporte. A diferencia de los formatos VAST, este tipo de formato permite añadir cualquier tipo de contenido creativo en una capa interactiva sobre el video.

El video principal de este formato se inyecta directamente sobre el reproductor del soporte y sobre el se coloca el contenido de nuestro html en un iframe.

## Configuración 

Reemplaza el video de la plantilla situado en la carpeta 'AdditionalAssets/mainVideo.mp4' por tu video principal. Monta tu creatividad utilizando los recursos que necesites( librerias externas, css, etc... ) como si se tratase de una creatividad de display.

Cuando tengas terminada la creatividad, sube la pieza a la plataforma.

Habria que crear un nuevo ad y aplicar la siguiente configuracion:

Formato: In-Stream Video
Template: In-Stream Video Interactive

En el apartado de linear, seleccionaremos el fichero zip que hemos subido a la plataforma. Es importante ajustar el tiempo para que coincida con el de nuestro video principal para que el formato no se autocierre antes de que termine el video.

Bajo el apartado linear, podemos configurar si es necesario que aparezca un boton de Skip que permita saltar el anuncio a partir de x segundos.

Por último, en el apartado de Additional Asset deberemos añadir nuestro video principal que se encontrara en una carpeta en el mismo nivel donde hemos subido nuestro zip.

Una vez configurado el formato deberia quedar como en este ejemplo:

![Ejemplo HTML VPAID](http://www.sizmek.es/eb/users/javiegido_/__GithubImages/HTML5_VPAID.png)

Recuerda que si tienes cualquier duda puedes ponerte en contacto con el equipo de <a href="mailto:creativesupport-spain@sizmek.com">Soporte Creativo de Sizmek</a>

*** 