# Conceptos
El desarrollo de la libreria se fundamenta en dos (2) componentes clave para garantizar su correcto funcionamiento.

- La libreria esta diseñada para el control de motores con pines reservados de la Shield L298P, que puedes comprar en nuestra tienda virtual [Comprar Aqui](https://www.bigtronica.com/motores/drivers/622-shield-driver-motores-l298p-5053212006228.html)

- La libreria esta diseñada para el funcionamiento del control Play2 en colaboracion con el aporte de la libreria [Arduino-PS2X ](https://github.com/madsci1016/Arduino-PS2X)

::: danger Nota:
No podemos garantizar el funcionamiento adecuado con los controles de PlayStation (PS) diferentes al de PS2.
:::

Si deseas programar tu plataforma robótica con un driver de motores diferente utilizando el control Play2, puedes emplear directamente la librería [Arduino-PS2X ](https://github.com/madsci1016/Arduino-PS2X)

## Crear BigBot
Comenzamos creando nuestro **Bot** y lo nombramos como **mibot**. Una vez hemos incluido la librería *Bigbot.h* hemos completado la inicialización de nuestro Bigbot.
```c
#include <Bigbot.h>
Bot mibot;
void setup() {
  /* Configuracion pinout */
}

void loop() {
/*Rutina*/
}
```



