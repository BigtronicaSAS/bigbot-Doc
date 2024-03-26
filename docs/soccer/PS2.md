<script setup>
import LiteVideo from '/../Components/LiteVideo.vue'
</script>

# Control PS2
  <br/>
  <LiteVideo
    id="lrEBo1PbUA4"
    title="Bigbot MAGIC SOCCER PS2"
    thumbnail="/PS2MagicSOCCER.webp"
  />


🕹️ Aunque el mando de Play2 no fue originalmente diseñado para el control de plataformas robóticas, BigBot se acerca a esta experiencia con una librería. Ten en cuenta que puede presentar bugs, errores y desconexiones repentinas. Por lo tanto, este producto se ofrece con fines educativos. 🤖📚

::: info Nota:
💡 Para garantizar una alta durabilidad del control PS2 y su protección, recomendamos conectar un conversor lógico de 3.3V a 5V. El nivel lógico del mando es de 3.3V, lo que asegura un rendimiento óptimo a lo largo del tiempo. Puedes adquirir el conversor lógico [aquí](https://www.bigtronica.com/comunicaciones/conversores-de-senal/300-conversor-nivel-logico-4ch-5053212003005.html?search_query=conversor+logico&results=83). 🔗

:::

## Conexion

::: danger Nota:
La alimentacion del receptor PS2 es de 3.3V, si alimenta el receptor con 5V puede correr el riesgo de dañarlo
:::

Nuestro BigBot Soccer incluye un adaptador especialmente diseñado para facilitar la conexión del receptor de PlayStation 2 al Arduino. Es crucial seguir las indicaciones proporcionadas en la imagen. Es posible que el adaptador varíe, por lo tanto, es fundamental asegurarse de conectarlo según el esquemático de conexión.

![Conexion Receptor imagen](/PS2Receptor.webp)

### Esquematico Conexion
![Conexion Receptor](/receptor.webp)


## Mando PS2

¡Echa un vistazo a la configuración increíble de nuestro mando PS2! 🎮✨

![Mando PS2](/mandoPS2.webp)


### Emparejar Mando PS2

¡Emparejar tu mando PS2 es tan fácil como ver una peli en un domingo relajado con la consola! 🕹️✨ Simplemente enciende tu mando y pulsa el botón `Mode`. Cuando veas que solo brilla el **LED rojo**, ¡ya está listo para la acción!

  <LiteVideo
    id="63equ-vTId8"
    title="Emparejar Mando PS2"
  />

## Programación

Para programar nuestro Bigbot con el control de Play2, simplemente llamamos a la función **PS2()**.

Esta función necesita dos parámetros: el primero es el **objeto Bot** que hemos instanciado, mientras que el segundo es la **velocidad de Arranque** predeterminada a la que deseamos que el robot se mueva. 

Para el bot, hay dos velocidades adicionales: **media y turbo**, las cuales están predefinidas en la libreria y no pueden ser modificadas. Solo se puede ajustar la velocidad de arranque, actuando como una especie de selector de marchas, siendo "primera" en este caso; si no definimos la velocidad de arranque, por defecto será 100.
```c
void PS2(Bot &bot, int minVelocidad=100);
```

A continuación, te mostramos un ejemplo de código para configurar un Bigbot `SOCCER` con el Control PS2. En este caso, hemos establecido una velocidad de arranque de 70.
```c
#include <Bigbot.h>

Bot mibot(SOCCER);

void setup() {

int Velocidad = 70;
PS2(mibot, Velocidad);

}

void loop() {
}
```

### Subir codigo
❤ Subir el código es muy sencillo. ¡Solo sigue los pasos de la imagen y en un abrir y cerrar de ojos tendrás tu código listo!

![Subir CODIGO PASO A PASO IDE ARDUINO](/IDE_PS2.webp)

O simplemente pégalo en el IDE de Arduino. ¡Facilísimo!👇

```c
#include <Bigbot.h>

Bot mibot(SOCCER);
void setup() {
PS2(mibot); // Velocidad por defecto de 100
}

void loop() {
}
```

