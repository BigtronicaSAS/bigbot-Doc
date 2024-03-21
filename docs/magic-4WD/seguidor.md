# Seguidor de Linea
## Conexion

🔗 Para programar tu seguidor de línea, sigue las conexiones según la imagen de los seguidores de línea a la Shield L298P.

![conexion seguidor](/4WD_Seguidor.webp)


## Programación

Para programar nuestro Bigbot como seguidor de línea, simplemente llamamos a la función **Seguidor()**, que requiere dos parámetros: el primero es el **objeto Bot** que has creado y el segundo es **la velocidad**. Si no se define la velocidad, por defecto será 100.
```c
void Seguidor(Bot &bot, int minVelocidad=100);
```

A continuación, un ejemplo de código para un seguidor de línea para Bigbot MAGIC_4WD con una velocidad de 180. La velocidad máxima es 255.
```c
#include <Bigbot.h>

Bot mibot(MAGIC_4WD);

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

Bot mibot(MAGIC_4WD);

void setup() {
Seguidor(mibot); // Velocidad por defecto de 100
}

void loop() {
}
```


## Calibracion Sensores

🛠️ ¡Calibra tus sensores de línea fácilmente! Observa el video, coloca un cartón negro en la pista, ajusta la sensibilidad con un destornillador hasta que el LED se apague al detectar la línea. ¡Listo!

<video width="100%" height="auto" autoplay loop muted>
  <source src="/calibracionSensor.mp4" type="video/mp4">
  Tu navegador no soporta la etiqueta de video.
</video>

## A jugar!

¡Listo para la acción! Simplemente coloca la shield sobre el Arduino y prepárate para la diversión. 🎉 ¡Qué maravilla, ¿verdad?!