# Rutina Magic
La familia Bigbot Magic viene con tres sensores de línea y un sensor ultrasónico en su configuración mas básica.  Con ellos, puedes usarlo tanto como un [evasor de obstáculos](/magic-4WD/evasor.md) o un [seguidor de línea](/magic-4WD/seguidor.md) de **manera independiente**. 

¡Pero espera, aún hay más! Hemos llevado las cosas al siguiente nivel: con solo subir tu código una sola vez, podrás activar ambos modos de trabajo (evasor y seguidor) con tan solo presionar un pulsador.

Nosotros nos encargamos de hacerlo más fácil para ti. Con solo una línea de código, podrás programar tu Bigbot Magic en su configuración más básica. Eso es lo que llamamos la rutina magic. ¡Es todo un mundo de posibilidades en una sola línea!

## Conexion 

🔗 Antes de programar la Rutina Magic en nuestro Bigbot, es importante haber realizado las conexiones del [sensor ultrasónico](/magic-4WD/evasor.md) y los [sensores de linea](/magic-4WD/seguidor.md) , como se detalla en los capítulos anteriores. 

Una vez que tengamos el Bigbot con estos componentes, solo necesitamos conectar el pulsador tipo Toggle al pin analógico A4, siguiendo el esquema de conexión mostrado en la shield L298P.

### Pulsador Toggle: ¡Activa el Modo que Quieras!

**¿Cómo funciona?** Por defecto, al encender el bigbot, operará en modo obstáculo. Sin embargo, si deseas cambiar al modo Seguidor, simplemente **presiona el pulsador durante 6 segundos** hasta que el Arduino detecte la interrupción del Bigbot.

Una vez que presiones el botón, cambiará al modo seguidor. Si deseas volver al estado inicial (Modo Evasor), simplemente presiona nuevamente el botón durante 6 segundos. ¡Eso es todo!

:::tip Recomendación
Si experimentas demoras en la detección del cambio por parte del Arduino, te sugerimos reiniciarlo.
:::

![Conexion Sensor Ultrasonido a L298P](/pulsador_magic.webp)
## Programación

Para programar nuestro Bigbot con la Rutina Magic, simplemente llamamos a la función **Start()**.

Esta función requiere tres parámetros: el primero es el **objeto Bot** que hemos creado, el segundo es **la velocidad** a la que queremos que se mueva el robot, y el tercero es la **distancia máxima** a la que deseamos detectar obstáculos. Si no especificamos la velocidad, por defecto será 100; y si no especificamos la distancia, por defecto será de 30 cm.
```c
void Start(Bot &bot, int minVelocidad=100, int Distancia = 30);
```

A continuación, te mostramos un ejemplo de código para configurar un Bigbot MAGIC_4WD. En este caso, hemos establecido una velocidad de 180 y una distancia máxima de detección de 50 cm para el modo de evasión de obstáculos, y una velocidad de 180 para el modo seguidor.
```c
#include <Bigbot.h>

Bot mibot(MAGIC_4WD);

void setup() {

int Velocidad = 180;
int Distancia = 50;
Start(mibot, Velocidad, Distancia);

}

void loop() {
}
```

### Subir codigo
❤ Subir el código es muy sencillo. ¡Solo sigue los pasos de la imagen y en un abrir y cerrar de ojos tendrás tu código listo!

![Subir CODIGO PASO A PASO IDE ARDUINO](/IDE_Magic.webp)

O simplemente pégalo en el IDE de Arduino. ¡Facilísimo!👇

```c
#include <Bigbot.h>

Bot mibot(MAGIC_4WD);
void setup() {
Start(mibot); // Velocidad por defecto de 100 y distancia de 30cm
}

void loop() {
}
```


## A jugar!
¡Listo para la acción! Simplemente coloca la shield sobre el  Arduino y prepárate para la diversión. 🎉 ¡Qué maravilla, ¿verdad?!

