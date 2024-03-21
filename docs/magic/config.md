# Direccion Incorrecta

**¿El robot no gira en la dirección esperada según el control?**

Si enfrentas este problema, verifica las conexiones de los motores en la shield L298P para asegurarte de que coincidan con la documentación. Si los problemas persisten tras reiniciar, considera crear una configuración personalizada.

### Configuración Personalizada

En nuestra documentación, encontramos variables reservadas como **SOCCER**, **MAGIC_4WD** y **MAGIC**, que representan configuraciones estándar. No obstante, también puedes crear tu propia configuración para adaptarse a diferentes plataformas.

La configuración se define mediante un Struct llamado Bigbot, que consta de 4 structs de tipo Motion para controlar los motores en las direcciones de avance, retroceso, giro a la derecha e izquierda.

```c
struct Motion
{
	bool MotorA, MotorB;
};
struct Bigbot
{
    Motion Adelante;
	Motion Atras;
	Motion Derecha;
	Motion Izquierda;
};
```
Para solucionar problemas como la inversión del sentido de avance y retroceso, puedes crear una nueva configuración personalizada en base a la de **MAGIC**. Por ejemplo:
```c
#include <Bigbot.h>

// Configuracion Propia
Bigbot MyConfig = {
    .Adelante =MAGIC.Atras, 
    .Atras = MAGIC.Adelante, 
    .Derecha = MAGIC.Derecha, 
    .Izquierda =MAGIC.Izquierda, 
}; 


Bot bot(MyConfig);
void setup() {
PS2(bot);
}

void loop() {
}
```

Con esta solución, puedes ajustar el sentido de giro según tus necesidades específicas.