<script setup>
import LiteVideo from '/../Components/LiteVideo.vue'
</script>

# Seguidor de Linea

<br/>
  <LiteVideo
    id="1X7-dO1EeGE"
    title="Calibracion Sensores de Linea"
    thumbnail="/seguidorMagic2WD.webp"
  />

## Conexion

🔗 Para programar tu seguidor de línea, sigue las conexiones según la imagen de los seguidores de línea a la Shield L298P.

![conexion seguidor de linea](/seguidor_2wd_magic.webp)


## Programación

Para programar nuestro Bigbot como seguidor de línea, simplemente llamamos a la función **Seguidor()**, que requiere dos parámetros: el primero es el **objeto Bot** que has creado y el segundo es **la velocidad**. Si no se define la velocidad, por defecto será de 100.
```c
void Seguidor(Bot &bot, int minVelocidad=100);
```

A continuación, un ejemplo de código para un seguidor de línea para Bigbot MAGIC con una velocidad de 180. La velocidad máxima es 255.

```c
#include <Bigbot.h>

Bot mibot;

void setup() {

int Velocidad = 180;
Seguidor(mibot, Velocidad);

}

void loop() {
}
```

❤ Subir el código es muy sencillo. ¡Solo sigue los pasos de la imagen y en un abrir y cerrar de ojos tendrás tu código listo!

![conexion seguidor](/IDE_Seguidor.webp)

O simplemente pégalo en el IDE de Arduino. ¡Facilísimo!👇

```c
#include <Bigbot.h>

Bot mibot;

void setup() {
Seguidor(mibot); // Velocidad por defecto de 100
}

void loop() {
}
```


## Calibracion Sensores

🛠️ ¡Calibra tus sensores de línea fácilmente! Observa el video, coloca un cartón negro en la pista, ajusta la sensibilidad con un destornillador hasta que el LED se apague al detectar la línea. ¡Listo!
  <LiteVideo
    id="AL-kroKrw0g"
    title="Calibracion Sensores de Linea"
  />
