# Crear Bot
Nuestra Libreria está diseñada para adaptarse a todas las configuraciones de nuestra familia BigBot.

Comenzamos creando nuestro **Bot**, al que llamaremos **mibot**. El constructor de este Bot requiere un parámetro que indicará la plataforma que vamos a utilizar. Por defecto, si se llama al constructor sin argumentos, la configuración inicial será la del BigBot Magic 2WD.
```c
Bot mibot(); /*---> Configuracion MAGIC 2WD */

```

Para crear un nuevo Bot destinado al **BigBot SOCCER**, solo necesitamos proporcionar el parámetro especial `SOCCER`, que automáticamente configurará el bot para esta plataforma.

```c
#include <Bigbot.h>

Bot mibot(SOCCER);
void setup() {
}

void loop() {
}

```
