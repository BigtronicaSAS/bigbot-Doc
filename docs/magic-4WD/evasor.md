<script setup>
import LiteVideo from '/../Components/LiteVideo.vue'
</script>
# Evasor de Obstaculos

<br/>
  <LiteVideo
    id="Qi_BkfRrMV0"
    title="Evasor de Obstaculos"
    thumbnail="/EvasorMagic4WD.webp"
  />

## Conexion 

🔗 Para programar tu evasor de obstáculos, conecta el sensor ultrasónico HC-SR04 según la imagen. Puedes adquirir el sensor en nuestra tienda virtual [aquí](https://www.bigtronica.com/sensores/ultrasonido/55-sensor-ultrasonido-hc-sr04-5053212000554.html) para la Shield L298P.

![Conexion Sensor Ultrasonido a L298P](/4WD_Obstaculo.webp)
## Programación

Para programar nuestro Bigbot como evasor de obstaculos, simplemente llamamos a la función **Obstaculo()**.

Esta función requiere tres parámetros: el primero es el **objeto Bot** que hemos creado, el segundo es **la velocidad** a la que queremos que se mueva el robot, y el tercero es la **distancia máxima** a la que deseamos detectar obstáculos. Si no especificamos la velocidad, por defecto será 100; y si no especificamos la distancia, por defecto será de 30 cm.
```c
void Obstaculo(Bot &bot, int minVelocidad=100, int Distancia = 30);
```

A continuación, se presenta un ejemplo de código para configurar un evasor de obstáculos para un Bigbot `MAGIC_4WD`. En este caso, hemos establecido una velocidad de 180 y una distancia máxima de detección de 50 cm. 
```c
#include <Bigbot.h>

Bot mibot(MAGIC_4WD);

void setup() {

int Velocidad = 180;
int Distancia = 50;
Obstaculo(mibot, Velocidad, Distancia);

}

void loop() {
}
```

### Subir codigo
❤ Subir el código es muy sencillo. ¡Solo sigue los pasos de la imagen y en un abrir y cerrar de ojos tendrás tu código listo!

![Subir CODIGO PASO A PASO IDE ARDUINO](/IDE_Obstaculo.webp)

O simplemente pégalo en el IDE de Arduino. ¡Facilísimo!👇

```c
#include <Bigbot.h>

Bot mibot(MAGIC_4WD);
void setup() {
Obstaculo(mibot); // Velocidad por defecto de 100 y distancia de 30cm
}

void loop() {
}
```


