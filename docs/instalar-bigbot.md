

# Libreria Bigbot
Nos encanta hacerte la programación más fácil. En el apartado [Avanzado](/metodos-bot.html), descubre todos los métodos geniales de nuestra librería. Puedes descargar la libreria con el botón de "Descargar Libreria" o desde nuestro repo😍 en GitHub.

::: tip Recomendación
Descarga la librería en GitHub para estar al tanto de mejoras y soluciones. ¡GitHub te mantiene en la jugada! 🚀
:::

<div class="download-layout">
  <a class="btn" target="_blank" href="https://github.com/BigtronicaSAS/BigBot/archive/refs/heads/main.zip">
Descargar Libreria
</a>
</div>

## Descargar en Github 
Te recomendamos descargarlo directamente desde GitHub. Si eres hábil con git, puedes clonarlo en 'Documents\Arduino\libraries' usando el comando.
```bash
Git clone https://github.com/BigtronicaSAS/BigBot
```
## Incluir Libreria
Después de haber descargado la libreria, simplemente sigue los pasos indicados en el video para añadir la librería y prepararlo todo. Así estarás listo para empezar



<video width="100%" height="auto" autoplay loop muted>
  <source src="/Libreria.mp4" type="video/mp4">
  Tu navegador no soporta la etiqueta de video.
</video>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const zipUrl = 'https://github.com/BigtronicaSAS/BigBot/archive/refs/heads/main.zip';

  async function descargarArchivoZip(url, nombreArchivo) {
    try {
      // Hacer una solicitud para obtener el archivo zip
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error al descargar el archivo zip: ${response.statusText}`);
      }

      const blob = await response.blob();

      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = nombreArchivo;
      link.click();
      window.URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // Obtener el botón
  const botonDescarga = document.getElementById('descargarBoton');

  // Agregar event listener para detectar clics en el botón
  botonDescarga.addEventListener('click', function() {
    descargarArchivoZip(zipUrl, 'bigbot.zip');
  });
});
</script>