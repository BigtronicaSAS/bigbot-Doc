# Metodos @Bot

- **Métodos Privados** 🚩: Estos métodos implementan configuraciones específicas para la Shield L298P, la cual puedes adquirir en nuestra tienda [aquí](https://www.bigtronica.com/motores/drivers/622-shield-driver-motores-l298p-5053212006228.html). Es crucial tener en cuenta que estos métodos no son compatibles con otros controladores de motores.

- **Métodos Públicos** ⚡ Estos métodos son universales y pueden ser utilizados tanto con la Shield L298P como con otros drivers de motores.

## Adelante 🚩

```c
/* Adelante: necesita el parametro de velocidad*/
bot.adelante(int Velocidad)
/* La velocidad debe estar en el rango de 0 a 255 como máximo */

```

## Atras 🚩

```c
/* Atras: necesita el parametro de velocidad*/
bot.atras(int Velocidad)
/* La velocidad debe estar en el rango de 0 a 255 como máximo */

```

## Derecha 🚩

```c
/* girar_derecha: necesita el parametro de velocidad*/
bot.girar_derecha(int Velocidad)
/* La velocidad debe estar en el rango de 0 a 255 como máximo */

```

## Izquierda 🚩

```c
/* girar_izquierda: necesita el parametro de la velocidad*/
bot.girar_izquierda(int Velocidad)
/* La velocidad debe estar en el rango de 0 a 255 como máximo */

```

## Parar 🚩

```c
/* parar: no necesita el parametro de la velocidad*/
bot.parar()
```

## Evasor de Obstaculos 🚩

Este método incorpora una rutina para el evasor de obstáculos y requiere dos parámetros: MaximaDistancia y velocidad.

- **MaximaDistancia:** Este parámetro debe ser un número entero y representa la distancia máxima que deseamos que el sensor ultrasónico HC-SR04 detecte. Cuando detecta esta distancia, el robot se prepara para retroceder cuando la distancia detectada sea la mitad de **MaximaDistancia** y luego, de manera aleatoria, decide girar a la derecha o a la izquierda.

- **Velocidad:** Este parámetro debe ser un número entero en el rango de 0 a 255.

Aqui esta el codigo del metodo:

```c
void Bot::obstaculos(int MaximaDistancia, int velocidad){
  long randomNumber;
  int distance = detectar_obstaculo();
  if (distance > 0){
    if(distance < MaximaDistancia){
      if(distance > (MaximaDistancia/2)){
        atras(velocidad);
        delay(200);
        parar();
        delay(500);
      }else{
        // Generar un número aleatorio para decidir la dirección de giro
        randomNumber = random(1,3);
        if (randomNumber == 1){
          girar_izquierda(velocidad);
          delay(400);
          parar();
          delay(500);
        }else{
          girar_derecha(velocidad);
          delay(400);
          parar();
          delay(500);
        }

      }
    }else{
      adelante(velocidad);
    }
   }
 else{
  adelante(velocidad);
  }
}
```

En el codigo del arduino, debe instanciarse el bot y luego en el _loop_ llamar al método obstaculos()

```c
bot.obstaculos(int MaximaDistancia, int velocidad);
```

## Detectar Obstaculos ⚡

Este método es público y está disponible para su uso. Únicamente devuelve el valor de distancia del sensor.

```c
/* este metodo retorna la distancia del sensor */
bot.detectar_obstaculo();
```

## Seguidor de linea 🚩

Este método incluye una rutina para el seguidor de línea TCRT5000, el cual consta de **tres(3)** sensores de línea; disponibles en nuestra tienda [Aquí](https://www.bigtronica.com/sensores/infrarrojo/122-tarjeta-sensor-de-linea-5053212001223.html). Requiere cuatro parámetros:

- **Left:** Define el pin digital para el seguidor de línea **izquierdo**.
- **Center:** Define el pin digital para el seguidor de línea **central**.
- **Right:** Define el pin digital para el seguidor de línea **derecho**.
- **Velocidad:** Este parámetro debe ser un número entero en el rango de 0 a 255.

```c
/* este metodo retorna la distancia del sensor */
bot.seguidor(Left ,Center ,Right ,Velocidad);
```

La configuración del seguidor de línea se basó en la siguiente imagen. Si deseas modificar el código según tus necesidades, tienes total permiso para hacerlo. Solo visita nuestro repositorio en GitHub [Aqui](https://github.com/BigtronicaSAS/BigBot).

![configuracion](/seguidorConfiguracion.jpg)

::: danger Nota:
La librería está diseñada para un seguidor de línea de tres sensores. Es crucial modificar el código si deseas agregar o quitar algún sensor; de lo contrario, el funcionamiento puede verse afectado.
:::

## Control PLAY 2 🚩

Sin duda, uno de los métodos más apreciados por nuestros clientes es la capacidad de controlar su plataforma robótica con el mando PS2. Este método proviene de una herencia múltiple con la clase PS2X, la cual incluye otras funciones que no detallaremos en esta sección.  Nuestra clase `Bot` hereda los métodos de PS2X, lo que significa que podemos instanciar los métodos de PS2X utilizando `Bot`.


Configurar nuestro control para el BigBot es increíblemente sencillo gracias a dos métodos:

- **Configuracion Control** En primer lugar, configuramos nuestro control mediante el método `controlPS2`. Este método debe ubicarse dentro de la función `setup()` de Arduino.

```c
 bot.controlPS2(pin_clock , pin_command, pin_attention, pin_data);
```

- **Rutina Control**  En el bucle del código de Arduino, iniciamos la rutina de control con el método carPS2, proporcionando el parámetro de velocidad deseado. Por defecto, viene configurado con la velocidad máxima (255).

```c
 bot.carPS2(Velocidad); 
```

Si deseas ver las conexiones, el esquemático y obtener más información sobre la conexión, te invitamos a visitar la sección [BigBot Control PS2](/control-ps2.html) en  cómo programar.
