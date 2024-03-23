# Crear Bot
Nuestra Libreria está diseñada para adaptarse a todas las configuraciones de nuestra familia BigBot.

Comenzamos creando nuestro **Bot**, al que llamaremos **mibot**. El constructor de este Bot requiere un parámetro que especifica la plataforma que deseamos emplear. Por defecto, si llamamos al constructor sin argumentos (vacío), la configuración inicial será la del **BigBot Magic 2WD**

```c
#include <Bigbot.h>

Bot mibot;
void setup() {
}

void loop() {
}

```

Si deseas definir el BigBot, puedes utilizar la palabra reservada **MAGIC**:
```c
#include <Bigbot.h>

Bot mibot(MAGIC);
void setup() {
}

void loop() {
}

```
